import Image from "next/image";
import { StackLogo } from "./StackRow";

const StackItem = ({ name, image }: StackLogo) => {
  return (
    <div className="relative pointer-events-none">
      <Image src={image} width={250} height={200} alt={name} />
    </div>
  );
};

export default StackItem;
