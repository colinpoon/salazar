'use client';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';

import { Montserrat } from 'next/font/google';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const testimonials = [
  {
    name: 'Person One',
    Avatar: 'P1',
    title: 'Director of Marketing',
    desc: 'Best  platform I have ever used for my business. It has been a game changer!',
  },
  {
    name: 'Person Two',
    Avatar: 'P1',
    title: 'Director of Marketing',
    desc: 'Best  platform I have ever used for my business. It has been a game changer!',
  },
  {
    name: 'Person Three',
    Avatar: 'P1',
    title: 'Director of Marketing',
    desc: 'Best  platform I have ever used for my business. It has been a game changer!',
  },
  {
    name: 'Person Four',
    Avatar: 'P1',
    title: 'Director of Marketing',
    desc: 'Best  platform I have ever used for my business. It has been a game changer!',
  },
];

export const LandingTestimonials = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="ml-[10%] mr-[20%] pb-[13.25rem]">
      <div className="flex flex-col">
        <div className="flex flex-col w-full pb-[10.25rem]">
          <div className="border-b-2 border-brand-primary mb-6"></div>
          <div className="flex flex-row justify-between items-start text-brand-primary mx-3">
            <div className="flex flex-row items-center">
              Testamonials <ArrowDown className="h-5 w-5 ml-1" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((items) => (
            <Card
              key={items.desc}
              className="bg-brand-secondary border-none"
            >
              <CardHeader>
                <CardTitle
                  // key={items.desc}
                  className="flex items-center gap-x-2"
                >
                  <div>
                    <p className="text-lg text-brand-muted-2">
                      {items.name}
                    </p>
                    <p className="text-sm text-brand-muted-1">
                      {items.title}
                    </p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {items.desc}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
