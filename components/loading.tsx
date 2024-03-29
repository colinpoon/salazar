import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import loading from 'public/Subtract.png';
interface Loadingprop {
  label: string;
}

export const Loading = ({ label }: Loadingprop) => {
  return (
    // <div className="h-full flex flex-col items-center justify-center">
    //   <div className="h-75 w-75">
    //     <p className="text-muted-foreground test-sm p-3 md:px-6">
    //       {/* <p className="text-muted-foreground test-sm absolute top-[75%] left-[48%]"> */}
    // { label }
    //     </p>
    //     <Spline scene="https://prod.spline.design/WxlTWgxyxb5W8xai/scene.splinecode" />
    //   </div>
    // </div>
    <div className="h-full flex flex-col gap-y-4 items-center justify-center p-3 md:px-6 mb-8 static">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src={loading} sizes="100%" />
      </div>
      <div className="text-sm text-muted-foreground">Thinking...</div>
    </div>
  );
};
