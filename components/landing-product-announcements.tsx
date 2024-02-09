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
export const LandingAnnouncements = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex flex-col">
      <div className="h-[100vh] bg-brand-secondary">
        <div className="flex flex-col w-full p-24">
          <div className="border-b-2 border-brand-muted-2 mb-6"></div>
          <div className="flex flex-row justify-between items-start text-brand-muted-2 mx-3">
            <div className="flex flex-row w-[30%] justify-between">
              <div>Date</div>
              <div className="flex flex-row items-center">
                Salazar <ArrowDown className="h-5 w-5 ml-1" />
              </div>
            </div>
            <span>Product Announcements</span>
          </div>
        </div>
      </div>
    </div>
  );
};
