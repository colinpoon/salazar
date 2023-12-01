'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';

const montserrate = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-black text-white">
      <div className="px-[32] pt-[32px] flex-1">
        <Link
          href={'/dashboard'}
          className="flex flex-row justify-between items-start px-[32px] mb-14"
        >
          <div className="relative w-10 h-8 mr-4">
            <Image fill alt="Salazar Logo" src={'/lg-logo-1.png'} />
          </div>
          <h1
            className={cn(
              'font-medium text-2xl',
              montserrate.className
            )}
          >
            Salazar
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

// sidebar component
//     <ul className="text-action-primary-hover">
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         this
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         is
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         a
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         sidebar
//       </li>
//     </ul>
