'use client';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

import { Montserrat } from 'next/font/google';
import logo from 'public/logo-1.svg';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
export const LandingNav = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="w-full p-6 bg-transparent flex items-center justify-between">
      <div className="flex flex-row gap-x-36">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="logo" src={logo} />
          </div>
          <h1
            className={cn(
              'text-3xl font-bold text-brand-primary',
              font.className
            )}
          >
            Salazar
          </h1>
        </Link>

        <div className="flex items-center gap-x-4">
          <Link href={'/sign-up'}>
            <Button variant="underline" className="text-lg">
              About
              <ArrowUpRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
          <Link href={'/sign-up'}>
            <Button variant="underline" className="text-lg">
              Github
              <ArrowUpRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
          <Link href={'/sign-up'}>
            <Button variant="underline" className="text-lg">
              LinkedIn
              <ArrowUpRight className="h-5 w-5 ml-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="underline" className="text-lg">
            Login
            <ArrowUpRight className="h-5 w-5 ml-1" />
          </Button>
        </Link>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="actionSecondary" className="text-lg">
            Free Trial
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
