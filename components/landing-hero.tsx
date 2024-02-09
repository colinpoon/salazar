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
    <div className="flex flex-col">
      {/* <div className="h-[94vh]"> */}
      <div className="h-full">
        {/* could clean this up */}
        <div className="ml-[10%] mr-[20%] py-[13.25rem]">
          <div className="">
            {/*  */}
            <div className="text-brand-primary sm:text-xs md:text-sm lg:text-md text-bold font-light">
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
              original music, and engage users effortlessly with our
              NLU & NLP chatbot. Seamlessly integrated and
              user-friendly, SynthAI Pro is your shortcut to
              innovation. Subscribe now to transform ideas into
              reality and experience the future of AI-driven
              creativity.
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
      {/* 
      Product announcements

      <div className="h-[100vh] bg-brand-secondary">
        <div className="flex flex-col w-full p-24">
          <div className="border-b-2 border-brand-muted-2 "></div>
          <div className="flex flex-row justify-between items-start text-brand-muted-2 mx-3">
            <div className="flex-row items-center">
              Salazar <ArrowDown className="h-5 w-5 ml-1" />
            </div>
            <span>Product Announcements</span>
          </div>
        </div>
      </div> 
      */}
    </div>
  );
};
