import Image from "next/image";

const Logo = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    typeof window !== "undefined" && window?.scrollTo(0, 0);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer fixed left-[50px] top-[50px] z-20"
    >
      <Image src="images/logo.svg" width={110} height={45} alt="Irene Borada" />
    </div>
  );
};
export default Logo;
