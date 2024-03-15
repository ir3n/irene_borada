const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 lg:px-52">
      <div className="xl:w-2/3 xl:max-w-[75rem]">{children}</div>
    </div>
  );
};

export default Container;
