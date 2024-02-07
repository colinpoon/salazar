'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

import { MAX_FREE_COUNT } from '@/constants';

interface FreeCounterProps {
  apiLimitCount: number;
}

export const FreeCounter = ({
  apiLimitCount = 0,
}: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="px-3">
      <Card className="bg-brand-muted-1	 rounded-full border-3 border-black">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNT} Free Attempts
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button className="w-full" variant="pro">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
