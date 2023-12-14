import Image from 'next/image';
import Spline from '@splinetool/react-spline';

interface Emptyprops {
  label: string;
}

export const Empty = () => {
  return (
    <div className="h-full p-3 md:px-6 flex flex-col items-center justify-center">
      <Spline scene="https://prod.spline.design/WxlTWgxyxb5W8xai/scene.splinecode" />
      {/* <Image
          alt="empty"
          fill
          src={
            ''
          }
        /> */}
    </div>
  );
};
