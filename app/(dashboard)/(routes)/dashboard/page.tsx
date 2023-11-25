import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="text-6xl text-black-500">
        Dashboard Page (Protected)
      </p>
      <Button variant="default" size={'lg'}>
        Test
      </Button>
    </div>
  );
}
