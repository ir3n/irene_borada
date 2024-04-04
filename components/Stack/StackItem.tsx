import { useContext } from "react";
import Image from "next/image";
import { StackLogo } from "./StackRow";
import { ThemeContext } from "@/providers/theme-provider";

const StackItem = ({ name, image, lightImage }: StackLogo) => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className="relative">
      <Image
        src={lightImage && lightTheme ? lightImage : image}
        width={250}
        height={200}
        alt={name}
      />
    </div>
  );
};

export default StackItem;
