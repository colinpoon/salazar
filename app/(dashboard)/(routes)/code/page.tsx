'use client';

import axios from 'axios';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import toast from 'react-hot-toast';

import Spline from '@splinetool/react-spline';
import { ChatCompletionRequestMessage } from 'openai';

import { Heading } from '@/components/heading';
import { Empty } from '@/components/empty';
import { Loading } from '@/components/loading';
import { UserAvatar } from '@/components/user-avatar';
import { AiAvatar } from '@/components/ai-avatar';

import { useForm } from 'react-hook-form';
import { Code } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { formSchema } from './constants';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { usePro } from '@/hooks/use-pro';

export default function CodePage() {
  const proModel = usePro();
  const router = useRouter();
  const [messages, setMessages] = useState<
    ChatCompletionRequestMessage[]
  >([]);

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

      const response = await axios.post('/api/code', {
        messages: newMessages,
      });

      setMessages((current) => [
        ...current,
        userMessage,
        response.data,
      ]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      } else {
        toast.error('Oops! Something went wrong');
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:pb-[32px] h-full">
      <Heading
        title="Code Generator"
        desc="Generate code with the help of AI to develop more efficiently"
        icon={Code}
        iconColor="text-neutral-1"
        bgColor="bg-brand-muted-1"
      />
      {/* <div className="space-y-4 w-full"></div>
      <div className="flex flex-col gap-5 items-center"></div> */}
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
                      placeholder="Ask me anything"
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
          <div className="px-8 rounded-lg w-full flex items-center justify-center">
            <Loading label="Loading..." />
          </div>
        )}
      </div>
      <div className="px-4 lg:px-8 w-full">
        {messages.length === 0 && !isLoading && (
          <Empty label="No Conversation" />
        )}
        {/* <div key={messages.content} className={cn('p-8')}></div> */}

        <div className="flex flex-col gap-y-4 ">
          {messages.map((message) => (
            <div
              key={message.content}
              className={cn(
                'flex flex-row p-8 w-fit items-start gap-x-8 rounded-lg',
                message.role === 'user'
                  ? 'bg-white border-black/10'
                  : 'bg-brand-muted-2 text-white '
              )}
            >
              {message.role === 'user' ? (
                <UserAvatar />
              ) : (
                <AiAvatar />
              )}
              {/* <ReactMarkdown className="text-sm mt-[6px]"> */}
              <ReactMarkdown
                components={{
                  pre: ({ node, ...children }) => (
                    <div className="overflow-auto w-full my-2 bg-black/50 p-2 rounded-lg">
                      <pre {...children} />
                    </div>
                  ),
                  code: ({ node, ...children }) => (
                    <code
                      className="bg-black/50 p-1 rounded-lg"
                      {...children}
                    />
                  ),
                }}
                className="text-sm overflow-hidden leading-7 "
              >
                {message.content || ''}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
