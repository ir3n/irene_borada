import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

const StackItem = ({ name, image }: Props) => {
  return (
    <div data-cursor-text={name} className=" relative">
      <Image src={image} width={200} height={200} alt={name} />
    </div>
  );
};

export default StackItem;
