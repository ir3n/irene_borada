import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <nav className="fixed top-0 right-0 bg-accent w-1/3 max-w-[45rem] h-screen z-10">
      <ul>
        <MenuItem />
      </ul>
    </nav>
  );
};

export default MenuList;
