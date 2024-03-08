'use client';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';

import { Montserrat } from 'next/font/google';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
export const LandingHero = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex flex-col h-[100vh]">
      {/* // <div className="flex flex-col h-full"> */}
      {/* <div className="flex flex-col h-[95vh]"> */}

      <div className="mx-16 sm:mx-16 md:mx-24 lg:mx-36 p-0 md:pr-[5%] lg:pr-[20%] py-[13.25rem] mt-[88px]">
        {/* still problems on mobile  height and scrolling 
          fix top and bottom padding for mobile

        
        ***/}
        <div className="">
          {/*  */}
          <div className="text-brand-primary sm:text-xs md:text-sm lg:text-md text-bold font-light ml-1">
            <TypewriterComponent
              options={{
                strings: [
                  'Image Generator.',
                  'Video Generator.',
                  'Music Generator.',
                  'Chatbot.',
                  'Code  Generator.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1 className="text-brand-primary text-left space-y-5 my-5 text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
            Introducing Salazar
          </h1>
          <h3 className="text-brand-primary text-left font-light space-y-5 sm:text-xl md:text-2xl lg:text-3xl">
            A comprehensive and unified AI platform. Generate code,
            craft dynamic videos, design stunning images, compose
            original music, and engage users effortlessly with our NLU
            & NLP chatbot. Seamlessly integrated and user-friendly,
            Salazar Pro is your shortcut to innovation. Subscribe now
            to transform ideas into reality and experience the future
            of AI-driven creativity.
          </h3>
        </div>
        <div className="flex-row mt-8">
          <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
            <Button variant="actionSecondary" className="text-lg">
              Start
              <ArrowUpRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
