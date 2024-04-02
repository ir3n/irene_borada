import Image from "next/image";
import { FreeTimeType } from ".";

const FreeTimeItem = ({ reverse, title, image, alt }: FreeTimeType) => {
  return (
    <div className="px-4 md:pl-24 lg:pl-52">
      <div
        className={`${
          reverse ? "flex-col-reverse" : "flex-col"
        } flex gap-5 w-[15.625rem] md:w-[25rem] `}
      >
        <div className="overflow-hidden">
          <div
            data-cursor-text={alt.toLowerCase()}
            className="block scale-110 rotate-3 transition duration-500 hover:scale-100 hover:rotate-0"
          >
            <Image src={image} alt={alt} width={400} height={400} />
          </div>
        </div>
        <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
      </div>
    </div>
  );
};

export default FreeTimeItem;
