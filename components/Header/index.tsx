import Image from "next/image";
import Menu from "../Menu";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 flex items-center justify-between px-5 lg:px-12 py-5 lg:py-12 z-10">
      <Image src="images/logo.svg" width={110} height={45} alt="Irene Borada" />
      <Menu />
    </header>
  );
};

export default Header;
