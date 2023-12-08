import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface HeadingProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  desc,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex item-center gap-x-3 mb-8">
        <div className={cn('p-2 w-fit rounded-md', bgColor)}>
          <Icon className={cn('w-10 h-10', iconColor)} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-2xl md:text-4xl text-black-500 text-center font-bold">
          {title}
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          {desc}
        </p>
      </div>
    </>
  );
};
