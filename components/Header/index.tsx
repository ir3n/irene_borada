import Logo from "./Logo";
import Menu from "../Menu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <div
        className="cursor-pointer fixed left-2.5 lg:left-12 top-[10px] lg:top-[50px] z-20 max-w-20 lg:max-w-max"
        data-cursor="-hidden"
      >
        <Logo />
      </div>
      <div className="cursor-pointer fixed right-[80px] lg:right-48 xl:right-52 top-[16px] lg:top-[50px] z-20 max-w-5 lg:max-w-max">
        <ThemeToggle />
      </div>
      <div
        className="fixed right-4 lg:right-10 xl:right-12 top-[6px] lg:top-[16px] w-8 lg:w-24 z-10"
        data-cursor="-hidden"
      >
        <Menu />
      </div>
    </header>
  );
};

export default Header;
