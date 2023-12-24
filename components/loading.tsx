import Spline from '@splinetool/react-spline';

// interface Emptyprops {
//   label: string;
// }

export const Loading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="h-75 w-75">
        <p className="text-muted-foreground test-sm p-3 md:px-6">
          {/* <p className="text-muted-foreground test-sm absolute top-[75%] left-[48%]"> */}
        </p>
        <Spline scene="https://prod.spline.design/WxlTWgxyxb5W8xai/scene.splinecode" />
      </div>
    </div>
  );
};
