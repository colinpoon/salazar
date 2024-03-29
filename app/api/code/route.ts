import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {
  ChatCompletionRequestMessage,
  Configuration,
  OpenAIApi,
} from 'openai';
import { incrementApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const queryMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'you are a code generator. All answers must be delivered as markdown code snippets. Use code comments to explain your process.',
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API Key not configured.', {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse('Messages are required', {
        status: 400,
      });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse(
        'Rate limit exceeded. Please wait and retry.',
        {
          status: 403,
        }
      );
    }
    // const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    // if (!freeTrial && !isPro) {
    //   return new NextResponse(
    //     'Free trial has expired. Please upgrade to pro.',
    //     { status: 403 }
    //   );
    // }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [queryMessage, ...messages],
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

// import { auth } from '@clerk/nextjs';
// import { NextResponse } from 'next/server';
// import {
//   ChatCompletionRequestMessage,
//   Configuration,
//   OpenAIApi,
// } from 'openai';
// import { incrementApiLimit, checkApiLimit } from '@/lib/api-limit';
// import { checkSubscription } from '@/lib/subscription';

// const maxDuration = 300; // Set the maximum duration to 300 seconds (5 minutes)

// const queryMessage: ChatCompletionRequestMessage = {
//   role: 'system',
//   content:
//     'you are a code generator. All answers must be delivered as markdown code snippets. Use code comments to explain your process.',
// };

// export async function POST(req: Request) {
//   try {
//     const { userId } = auth();
//     const body = await req.json();
//     const { messages } = body;

//     if (!userId) {
//       return new NextResponse('Unauthorized', { status: 401 });
//     }

//     if (!configuration.apiKey) {
//       return new NextResponse('OpenAI API Key not configured.', {
//         status: 500,
//       });
//     }

//     if (!messages) {
//       return new NextResponse('Messages are required', {
//         status: 400,
//       });
//     }

//     const freeTrial = await checkApiLimit();
//     const isPro = await checkSubscription();

//     if (!freeTrial && !isPro) {
//       return new NextResponse(
//         'Rate limit exceeded. Please wait and retry.',
//         {
//           status: 403,
//         }
//       );
//     }

//     const response = await fetch(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${configuration.apiKey}`,
//         },
//         body: JSON.stringify({
//           model: 'gpt-3.5-turbo',
//           messages: [queryMessage, ...messages],
//         }),
//         signal: AbortSignal.timeout(maxDuration), // Set the timeout to 300 seconds (5 minutes)
//       }
//     );

//     if (!isPro) {
//       await incrementApiLimit();
//     }

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Something went wrong');
//     }

//     return NextResponse.json(data.choices[0].message);
//   } catch (error) {
//     console.log('[CODE_ERROR]', error);
//     return new NextResponse('Internal Error', { status: 500 });
//   }
// }
