'use client';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  ImageIcon,
  MessageSquare,
  LayoutDashboard,
  Music,
  Settings,
  VideoIcon,
  Code,
} from 'lucide-react';

// {
//   label: 'Image Generation',
//   icon: ImageIcon,
//   href: '/image',
//   color: 'text-brand-primary',
// },
// {
//   label: 'Video Generation',
//   icon: VideoIcon,
//   href: '/video',
//   color: 'text-brand-primary',
// },
// {
//   label: 'Music Generation',
//   icon: Music,
//   href: '/music',
//   color: 'text-brand-primary',
// },
// {
//   label: 'Code Generation',
//   icon: Code,
//   href: '/code',
//   color: 'text-brand-primary',
// },
// {
//   label: 'Settings',
//   icon: Settings,
//   href: '/settings',
//   color: 'text-brand-primary',
// },
const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-brand-secondary',
    bgColor: 'bg-brand-muted-2',
    href: '/conversation',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-brand-muted-2',
    bgColor: 'bg-brand-secondary',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-brand-secondary',
    bgColor: 'bg-brand-muted-2',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-brand-secondary',
    bgColor: 'bg-brand-muted-2',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-brand-secondary',
    bgColor: 'bg-brand-muted-2',
    href: '/code',
  },
];
export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center px-4 py-4 md:px-[32px] md:py-[32px] h-full">
      <div className="flex flex-col gap-3 items-center mb-[64px]">
        <h2 className="text-2xl md:text-4xl text-black-500 text-center font-bold">
          Build with AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Start your journey
        </p>
      </div>
      <div className="space-y-4 w-full">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div
                className={cn('p-2 w-fit rounded-md', tool.bgColor)}
              >
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-5 items-center"></div>
    </div>
  );
}
