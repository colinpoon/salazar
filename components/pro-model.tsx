'use client';
import axios from 'axios';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  Check,
  Zap,
} from 'lucide-react';

import { usePro } from '@/hooks/use-pro';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-1',
    href: '/conversation',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-1',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-1',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-1',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-neutral-1',
    bgColor: 'bg-brand-muted-1',
    href: '/code',
  },
];

export const ProModel = () => {
  const proModel = usePro();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/stripe');
      window.location.href = (await res).data.url;
    } catch (error) {
      console.log(error, 'STRIPE_CLIENT_ERROR');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog
      open={proModel.isAvailable}
      onOpenChange={proModel.onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl text-brand-muted-2">
              Upgrade to Pro Model
              <Badge variant="pro" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div
                    className={cn(
                      'p-2 w-fit rounded-md',
                      tool.bgColor
                    )}
                  >
                    <tool.icon
                      className={cn('w-6 h-6', tool.color)}
                    />
                  </div>
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            className="w-full border-0"
            variant="pro"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white hover:fill-brand-primary" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    // ERROR <div> cannot appear as a descendant of <p>. @ either Card || Dialog || Button
    // maybe generated from UI Components
  );
};
