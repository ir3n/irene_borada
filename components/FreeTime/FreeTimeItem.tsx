import Image from "next/image";
import { FreeTimeType } from ".";

const FreeTimeItem = ({
  reverse,
  title,
  image,
  imageHover,
  alt,
}: FreeTimeType) => {
  return (
    <div className="px-4 md:pl-24 lg:pl-52">
      <div
        className={`${
          reverse ? "flex-col-reverse" : "flex-col"
        } flex gap-5 w-[15.625rem] md:w-[25rem]`}
      >
        <div className="">
          <Image src={image} alt={alt} width={400} height={400} />
        </div>
        <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
      </div>
    </div>
  );
};

export default FreeTimeItem;
