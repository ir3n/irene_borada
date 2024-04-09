import { useEffect, useState } from "react";
import Image from "next/image";
import { StackLogo } from "./StackRow";
import { useTheme } from "next-themes";

const StackItem = ({ name, image, lightImage }: StackLogo) => {
  const [src, setSrc] = useState(image);

  const { theme } = useTheme();

  useEffect(() => {
    setSrc(lightImage && theme === "light" ? lightImage : image);
  }, [theme, image, lightImage]);

  return (
    <div className="relative pointer-events-none">
      <Image src={src} width={250} height={200} alt={name} />
    </div>
  );
};

export default StackItem;
