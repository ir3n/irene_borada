import Logo from "./Logo";
import Menu from "../Menu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <div
        className="cursor-pointer fixed left-2.5 lg:left-[50px] top-2.5 lg:top-[50px] z-20 max-w-20 lg:max-w-max"
        data-cursor="-hidden"
      >
        <Logo />
      </div>
      <div
        className="cursor-pointer fixed right-20 lg:right-[200px] top-4 lg:top-[50px] z-20 max-w-5 lg:max-w-max"
        data-cursor="-hidden"
      >
        <ThemeToggle />
      </div>
      <div
        className="fixed right-4 lg:right-[50px] top-5 lg:top-[50px] w-12 lg:w-24 z-10"
        data-cursor="-hidden"
      >
        <Menu />
      </div>
    </header>
  );
};

export default Header;
