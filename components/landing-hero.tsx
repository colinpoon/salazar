'use client';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

import { Montserrat } from 'next/font/google';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
export const LandingHero = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex">
      <div className="flex-col">
        <div className="w-[60%] ml-[10%] pt-[16.25rem] ">
          <h1 className="text-brand-primary text-left space-y-5 text-6xl mb-3">
            Introducing Salazar
          </h1>
          <h3 className="text-brand-primary text-left space-y-5 text-3xl">
            We’ve trained a model called ChatGPT which interacts in a
            conversational way. The dialogue format makes it possible
            for ChatGPT to answer followup questions, admit its
            mistakes, challenge incorrect premises, and reject
            inappropriate requests.
          </h3>
        </div>
        <div className="flex-row"></div>
      </div>
    </div>
  );
};

{
  /* <div className={cn('flex items-center')}> */
}
