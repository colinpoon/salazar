import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center gap-5 px-12 py-12 h-full">
      <div className="flex flex-row justify-end items-center gap-5 w-full">
        <div className="border rounded-full border-black hover:border-[#9BFF5D] active:border-[#9BFF5D] focus:border-[#9BFF5D]">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-6xl text-black-500 font-semibold">
          Dashboard Page
        </p>
        <p className="text-3xl text-black-500 font-bold">
          (Private / Protected)
        </p>
      </div>
    </div>
  );
}
