import Image from 'next/image';

interface Emptyprops {
  label: string;
}

export const Empty = () => {
  return (
    <div className="h-full p-3 md:px-6 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        {/* <Image alt="empty" fill src={'/empty.png'} /> */}
        EMPTY
      </div>
    </div>
  );
};
