'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import toast from 'react-hot-toast';
import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';
import { Loading } from '@/components/loading';
import { UserAvatar } from '@/components/user-avatar';
import { AiAvatar } from '@/components/ai-avatar';

import { useForm } from 'react-hook-form';
import { VideoIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { formSchema } from './constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { usePro } from '@/hooks/use-pro';

export default function VideoPage() {
  const proModel = usePro();
  const router = useRouter();
  const [video, setVideo] = useState<string>();
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     prompt: '',
  //   },
  // });
  const formSchema = z.object({
    prompt: z.string().default(''),
    // ...other fields
  });

  type FormValues = z.infer<typeof formSchema>;

  type DefaultValues = Omit<FormValues, 'prompt'>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    } as DefaultValues,
  });
  // loading state
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      setVideo(undefined);

      const response = await axios.post('/api/video', values);

      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      } else {
        toast.error('Oops! Something went wrong');
      }
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:pb-[32px] h-full">
      <Heading
        title="Video"
        desc="Leverage AI to create your own video"
        icon={VideoIcon}
        iconColor="text-neutral-1"
        bgColor="bg-brand-muted-1"
      />

      <div className="px-4 lg:px-8 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-3 md:px-6 focus-within:shadow-sm grid
          grid-cols-12 gap-2 mb-8"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-full lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-tranparent"
                      disabled={isLoading}
                      placeholder="What would you like to see?"
                      autoComplete="off"
                      {...field}
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-full lg:col-span-2 w-full"
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt4 w-full">
        {isLoading && (
          <div className="px-8 rounded-lg w-full items-center justify-center">
            <Loading label="Loading..." />
          </div>
        )}
      </div>
      <div className="px-4 lg:px-8 w-full">
        {!video && !isLoading && <Empty label="No Video Generated" />}
        {video && (
          <video
            controls
            className="w-full aspect-video mt-8 rounded-lg border bg-black"
          >
            <source src={video} />
          </video>
        )}
      </div>
    </div>
  );
}
