const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 md:px-24 min-[1025px]:px-52">
      <div className="xl:w-2/3 xl:max-w-[75rem]">{children}</div>
    </div>
  );
};

export default Container;
