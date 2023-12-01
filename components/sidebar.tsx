'use client';

import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-brand-secondary text-black">
      <div className="px-[32] pt-[32px] flex-1">
        <Link
          href={'/dashboard'}
          className="flex-items-center pl-3 mb-14"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Salazar Logo" src={'/logo.png'} />
          </div>
          Salazar
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

// sidebar component
//     <ul className="text-action-primary-hover">
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         this
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         is
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         a
//       </li>
//       <li className="px-[32px] py-[12px] cursor-pointer hover:bg-action-primary-hover">
//         sidebar
//       </li>
//     </ul>
