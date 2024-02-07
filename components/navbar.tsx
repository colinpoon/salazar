import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from '@/components/mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="flex flex-row w-full md:justify-end justify-between items-center px-4 pt-4 ">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="border rounded-full border-black">
        {/* <div className="border rounded-full border-black hover:border-[#9BFF5D] active:border-[#9BFF5D] focus:border-[#9BFF5D]"> */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
