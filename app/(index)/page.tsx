import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 pt-20 px-20 h-full">
      <div className="flex flex-row justify-end items-center gap-5 w-full">
        <Link href="/sign-in">
          <Button variant={'default'}>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant={'default'}>Register</Button>
        </Link>
      </div>
      <p className="text-6xl text-black-500 font-semibold">Index</p>
      <p className="text-3xl text-black-500 font-bold">
        (Public / Unprotected)
      </p>
    </div>
  );
}
