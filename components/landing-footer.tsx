'use client';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

import { Montserrat } from 'next/font/google';
import logo from 'public/logo-1.svg';
import { ArrowUpRight, Circle, MoveUpRight } from 'lucide-react';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
export const LandingFooter = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="w-full p-6 bg-transparent flex items-center justify-between">
      <div className="flex flex-row gap-x-36 items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-6 w-6 mr-4">
            <Image fill alt="logo" src={logo} />
          </div>
          <h1
            className={cn(
              // 'text-3xl font-bold text-brand-primary',
              'text-3xl font-bold text-brand-comp',
              font.className
            )}
          >
            Salazar
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        {/* <Link href={''}>
          <Button variant="underline" className="text-lg">
            About
            <ArrowUpRight className="h-5 w-5 ml-1" />
          </Button>
        </Link> */}
        <Link href={'https://github.com/colinpoon'}>
          <Button variant="underline" className="text-lg">
            Github
            <ArrowUpRight className="h-5 w-5 ml-1" />
          </Button>
        </Link>
        <Link href={'https://www.linkedin.com/in/colinpoon/'}>
          <Button variant="underline" className="text-lg">
            LinkedIn
            <ArrowUpRight className="h-5 w-5 ml-1" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

{
  /* <div className={cn('flex items-center')}> */
}
