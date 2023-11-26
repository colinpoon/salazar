import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-full">
      <p className="text-6xl text-green-500">
        Salazar Index (Unprotected)
      </p>
      <div>
        <Link>
          <Button variant={'default'}>Sign In</Button>
        </Link>
      </div>
    </div>
  );
}
