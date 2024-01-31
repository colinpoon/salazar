import Spline from '@splinetool/react-spline';

interface Emptyprops {
  label: string;
}

export const Empty = ({ label }: Emptyprops) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <p className="text-muted-foreground text-sm p-3 md:px-6">
        {label}
      </p>
      {/* <div className="h-1/2 w-1/2"> */}
      <div className="w-full pr-[5%] overflow-hidden">
        <Spline
          className="translate-y-[-15%]"
          scene="https://prod.spline.design/WxlTWgxyxb5W8xai/scene.splinecode"
        />
      </div>
    </div>
  );
};
