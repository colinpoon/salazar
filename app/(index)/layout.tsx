const LandingLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-[#151D24] overflow-auto">
      <div className="mx-auto m-x-screen-xl w-full h-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
