import Spline from '@splinetool/react-spline';

interface Emptyprops {
  label: string;
}

export const Empty = ({ label }: Emptyprops) => {
  return (
    <div className="h-full flex flex-col items-start justify-center">
      <div className="h-75 w-75">
        <p className="text-muted-foreground text-sm p-3 md:px-6">
          {/* <p className="text-muted-foreground test-sm absolute top-[75%] left-[48%]"> */}
          {label}
        </p>
        <Spline scene="https://prod.spline.design/WxlTWgxyxb5W8xai/scene.splinecode" />
      </div>
    </div>
  );
};