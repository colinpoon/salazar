'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';

import { useForm } from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
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
import { cn } from '@/lib/utils';
import { ChatCompletionRequestMessage } from 'openai';
import { Loading } from '@/components/loading';

export default function ConversationPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<
    ChatCompletionRequestMessage[]
  >([]);
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
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post('/api/conversations', {
        messages: newMessages,
      });

      setMessages((current) => [
        ...current,
        userMessage,
        response.data,
      ]);
      form.reset();
    } catch (error: any) {
      //is premium model?
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:py-[32px] h-full">
      <Heading
        title="Conversation"
        desc="Leverage AI to create content or answer questions"
        icon={MessageSquare}
        iconColor="text-brand-primary"
        bgColor="bg-brand-muted-2"
      />
      {/* <div className="space-y-4 w-full"></div>
      <div className="flex flex-col gap-5 items-center"></div> */}
      <div className="px-4 lg:px-8 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-3 md:px-6 focus-within:shadow-sm grid
          grid-cols-12 gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-tranparent"
                      disabled={isLoading}
                      placeholder="Ask me anything"
                      {...field}
                    ></Input>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full"
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt4">
        {isLoading && (
          <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
            <Loading />
          </div>
        )}
      </div>
      <div className="px-4 lg:px-8 mt-4 w-full">
        {messages.length === 0 && !isLoading && (
          <Empty label="No Conversation" />
        )}
        {/* <div key={messages.content} className={cn('p-8')}></div> */}

        <div className="flex flex-col-reverse gap-y-4 p-3 md:px-6">
          {messages.map((message) => (
            <div key={message.content}>{message.content}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
