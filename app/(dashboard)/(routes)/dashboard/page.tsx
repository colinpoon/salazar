import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center gap-5 pt-20 px-20 h-full">
      <div className="flex flex-row justify-end items-center gap-5 w-full">
        <Link href="/sign-in">
          <Button variant={'default'}>Logout</Button>
        </Link>
      </div>
      <p className="text-6xl text-black-500 font-semibold">
        Dashboard Page
      </p>
      <p className="text-3xl text-black-500 font-bold">
        (Private / Protected)
      </p>
    </div>
  );
}
