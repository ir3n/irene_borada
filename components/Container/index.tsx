const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 md:px-28 lg:px-52 xl:px-64">
      <div className="xl:w-2/3 xl:max-w-[75rem]">{children}</div>
    </div>
  );
};

export default Container;
