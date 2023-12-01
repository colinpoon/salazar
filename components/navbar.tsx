import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex flex-row w-full md:justify-end justify-between items-center px-4 pt-4 ">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="border rounded-full border-black">
        {/* <div className="border rounded-full border-black hover:border-[#9BFF5D] active:border-[#9BFF5D] focus:border-[#9BFF5D]"> */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
