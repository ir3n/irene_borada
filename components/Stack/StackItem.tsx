import Image from "next/image";
import { StackLogo } from "./StackRow";

const StackItem = ({ name, image, lightImage }: StackLogo) => {
  return (
    <div className="relative">
      <Image src={image} width={250} height={200} alt={name} />
    </div>
  );
};

export default StackItem;
