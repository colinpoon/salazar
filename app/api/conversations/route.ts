import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';
import OpenAI from 'openai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI(config);
// const openai = new OpenAIApi(config);
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    if (!config.apiKey) {
      return new NextResponse('OpenAI Api Key not configured', {
        status: 500,
      });
    }
    if (!messages) {
      return new NextResponse('Messages are required', {
        status: 400,
      });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      //  messages: [
      //    { role: 'system', content: 'You are a helpful assistant.' },
      //  ],
    });
    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[Conversation_error', error);
    return new NextResponse('internal error', {
      status: 500,
    });
  }
}
