import Navbar from '@/components/navbar';

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-black">
        <ul className="text-action-primary-hover">
          <li className="md:px-[32px] md:py-[12px] cursor-pointer hover:bg-action-primary-hover">
            this
          </li>
          <li className="md:px-[32px] md:py-[12px] cursor-pointer hover:bg-action-primary-hover">
            is
          </li>
          <li className="md:px-[32px] md:py-[12px] cursor-pointer hover:bg-action-primary-hover">
            a
          </li>
          <li className="md:px-[32px] md:py-[12px] cursor-pointer hover:bg-action-primary-hover">
            sidebar
          </li>
        </ul>
      </div>
      <main className="md:pl-72 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
