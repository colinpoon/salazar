'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import logo from 'public/lg-logo-muted-1.svg';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { FreeCounter } from '@/components/free-counter';

const montserrate = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

// array for all routes
const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-brand-muted-1',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-brand-muted-1',
  },
];

const userSettings = [
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-brand-muted-1',
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between h-full text-black">
      <div className="px-[32] pt-[32px] flex-1">
        <Link
          href={'/dashboard'}
          className="flex flex-col justify-between items-start px-[32px] mb-14"
        >
          <h1
            className={cn(
              'font-medium text-2xl text-brand-muted-1 cursor-pointer hover:text-black transition',
              montserrate.className
            )}
          >
            Salazar
          </h1>
        </Link>
        <div className="space-y-1 px-[32px]">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              // className="text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:text-brand-primary hover:bg-white/10 rounded-lg transition"
              className={cn(
                'text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:text-black transition',
                pathname === route.href
                  ? 'text-black'
                  : // ? 'text-brand-muted-1'
                    'text-brand-muted-1'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn('h-5 w-5 mr-3', route.color)}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* sidebar footer */}

      <div className="flex flex-row items-center justify-between mb-4 px-[32px] static">
        <Link href={'/dashboard'} className="flex items-center">
          <div className="relative w-10 h-8 ">
            <Image
              fill
              alt="Salazar Logo"
              src={logo}
              className="cursor-pointer hover:text-black transition"
            />
          </div>
        </Link>
        {/* <div className="flex items-center justify-center">
          {userSettings.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              // className="text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:text-brand-primary hover:bg-white/10 rounded-lg transition"
              className={cn(
                'text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-full transition',
                pathname === route.href
                  ? 'text-white'
                  : 'text-brand-muted-1'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    'h-6 w-6 hover:text-black',
                    route.color
                  )}
                />
              </div>
            </Link>
          ))}
        </div> */}
        <FreeCounter apiLimitCount={apiLimitCount} />
      </div>
    </div>
  );
};

export default Sidebar;
