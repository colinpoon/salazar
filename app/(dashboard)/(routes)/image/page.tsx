'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {} from 'openai';
import Image from 'next/image';

import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';
import { Loading } from '@/components/loading';
import {
  amountOptions,
  resolutionOptions,
  formSchema,
} from './constants';

import { useForm } from 'react-hook-form';
import { DownloadIcon, ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';

import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form';

export default function ImagePage() {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);

  // // default values use form hook
  // const formSchema = z.object({
  //   prompt: z.string().default(''),
  //   // ...other fields
  // });
  // type FormValues = z.infer<typeof formSchema>;
  // type DefaultValues = Omit<FormValues, 'prompt'>;
  // const form = useForm<FormValues>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     prompt: '',
  //     amount: '1',
  //     resolution: '512x512',
  //   } as DefaultValues,
  // });

  type PromptFormValues = {
    prompt: string;
    amount: string;
    resolution: string;
  };

  const formSchema = z.object({
    prompt: z.string().default(''),
    amount: z.string().default('1'),
    resolution: z.string().default('512x512'),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({}) as FormValues,
  });

  // loading state
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      setImages([]);
      // console.log(values);
      const response = await axios.post('/api/images', values);

      const urls = response.data.map(
        (image: { url: string }) => image.url
      );
      // see [setimage] structure

      setImages(urls);

      form.reset();
    } catch (error: any) {
      //is premium model?
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:pb-[32px] h-full">
      <Heading
        title="Image Generation"
        desc="Leverage AI to create unique images"
        icon={ImageIcon}
        iconColor="text-neutral-1"
        bgColor="bg-brand-muted-2"
      />
      {/* <div className="space-y-4 w-full"></div>
      <div className="flex flex-col gap-5 items-center"></div> */}
      <div className="px-4 lg:px-8 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-3 md:px-6 focus-within:shadow-sm grid
          grid-cols-16 gap-2 mb-8"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-full lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-tranparent"
                      disabled={isLoading}
                      placeholder="Enter prompt..."
                      autoComplete="off"
                      {...field}
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* -------- */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-full lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Amount</SelectLabel>
                        {amountOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-full lg:col-span-2">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Resolution</SelectLabel>
                        {resolutionOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <Button
              className="col-span-full lg:col-span-2 w-full"
              disabled={isLoading}
            >
              Generate
            </Button>
            {/* -------- */}
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt4 w-full">
        {isLoading && (
          <div className="px-8">
            <Loading label="Loading..." />
          </div>
        )}
      </div>
      <div className="px-4 lg:px-8 w-full">
        {images.length === 0 && !isLoading && (
          <Empty label="No images generated." />
        )}
        {/* <div key={messages.content} className={cn('p-8')}></div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-4 gap-4 mt-8 static">
          {images.map((src) => (
            <Card key={src} className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  alt="Image"
                  fill
                  src={src}
                  className="object-contain"
                />
              </div>
              <CardFooter className="p-2">
                <Button
                  onClick={() => window.open(src)}
                  className="w-full"
                >
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
