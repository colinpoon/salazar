'use client';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { UserButton, useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';

import { Montserrat } from 'next/font/google';
import { ArrowDown, ArrowUpRight, Circle } from 'lucide-react';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});
const announcements = [
  {
    date: 'January 20, 2024',
    title: 'Code Generator',
    overiew:
      "Salazar's Code Generator is built on advanced machine learning principles, employing a combination of natural language processing (NLP) and neural networks to streamline the coding process.",
    desc1Title: 'NLP Algorithms',
    desc1:
      'Our Code Generator utilizes state-of-the-art NLP algorithms to understand and interpret human language, enabling precise code snippet generation based on project specifications.',
    desc2Title: 'Neural Networks',
    desc2:
      'Powered by robust neural networks, the Code Generator refines its output over time, adapting to coding nuances and project intricacies for enhanced accuracy.',
    desc3Title: 'Pattern Recognition',
    desc3:
      'Leveraging pattern recognition algorithms, the Code Generator identifies and replicates coding patterns, reducing development time by 20%.',
    impact:
      "Subscribers can expect an unparalleled coding experience, with Salazar Pro's Code Generator significantly accelerating development while maintaining precision. Developers can embrace an efficient coding workflow, eliminating manual coding challenges.",
    link: '/code',
  },
  {
    date: 'December 30, 2023',
    title: 'Video Generator',
    overiew:
      'The Video Generator in Salazar Pro is a testament to computational creativity, integrating computer vision and deep learning technologies to produce dynamic visual narratives.',
    desc1Title: 'Computer Vision Algorithms:',
    desc1:
      'Salazar employs cutting-edge computer vision algorithms to analyze and understand visual content, allowing for dynamic and engaging video creation.',
    desc2Title: 'Deep Learning Models',
    desc2:
      'The Video Generator leverages deep learning models to recognize patterns and optimize visual storytelling, ensuring seamless transitions and compelling visual experiences.',

    impact:
      'Subscribers gain access to a tool that redefines visual storytelling, empowering them to craft dynamic narratives effortlessly. The integration of AI technologies enhances user engagement by 30%, setting a new standard for video creation.',
    link: '/video',
  },
];

export const LandingAnnouncements = ({}) => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex flex-col bg-brand-secondary px-8 pt-14  sm:p-16 md:p-24 lg:p-28">
      <div className="">
        {announcements.map((item) => (
          <>
            <div className="mb-[10.25rem]">
              <div className="flex flex-col w-full mb-32">
                <div className="border-b-2 border-brand-muted-1 mb-6"></div>
                <div className="flex flex-row justify-between items-start text-brand-muted-1 mx-3">
                  <div className="flex flex-col gap-2 md:flex-row md:w-[35%] justify-between">
                    <div>{item.date}</div>

                    <div className="flex flex-row items-center">
                      Salazar <ArrowDown className="h-5 w-5 ml-1" />
                    </div>
                  </div>
                  <span>Product Announcements</span>
                </div>
              </div>
              <div className="mx-0 sm:mx-16 md:mx-24 lg:mx-36 p-0 md:pr-[5%] lg:pr-[20%]">
                <div className="text-xl">
                  <h3 className="text-left font-normal space-y-5 sm:text-lg md:text-xl lg:text-2xl mb-12 ">
                    {item.title}
                  </h3>
                </div>
                <div>{item.overiew}</div>
                <ul className="flex flex-col gap-4 my-6">
                  <li>
                    <p>
                      <strong>{item.desc1Title}</strong> {item.desc1}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>{item.desc2Title}</strong> {item.desc2}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>{item.desc3Title}</strong> {item.desc3}
                    </p>
                  </li>
                </ul>
                <div>{item.impact}</div>
                <div className="flex justify-between mt-24 item-center">
                  <Link
                    href={isSignedIn ? `${item.link}` : '/sign-up'}
                  >
                    <Button
                      variant="actionSecondary2"
                      className="text-sm"
                      size="sm"
                    >
                      Try Free
                      <ArrowUpRight className="h-5 w-5 ml-1" />
                    </Button>
                  </Link>
                  <Circle
                    fill="#5F5A5A"
                    stroke="#5F5A5A"
                    className="h-5 w-5 "
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
