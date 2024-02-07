'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

import { MAX_FREE_COUNT } from '@/constants';
import { usePro } from '@/hooks/use-pro';

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const proModel = usePro();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  if (isPro) {
    return null;
  }
  return (
    <div className="px-3 pb-3">
      <Card className="bg-brand-muted-1 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <div>{MAX_FREE_COUNT - apiLimitCount} Free Attempts</div>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button
            onClick={proModel.onOpen}
            className="w-full"
            variant="pro"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white hover:fill-brand-primary" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
