import {
  ArrowRight,
  ImageIcon,
  MessageSquare,
  LayoutDashboard,
  Music,
  Settings,
  VideoIcon,
  Code,
  Music3,
} from 'lucide-react';

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-2',
    href: '/conversation',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-2',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-2',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-2',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-2',
    href: '/code',
  },
];
