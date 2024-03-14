import Logo from "./Logo";
import Menu from "../Menu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <Logo />
      <ThemeToggle />
      <Menu />
    </header>
  );
};

export default Header;
