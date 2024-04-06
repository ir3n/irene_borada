import Image from "next/image";

interface FreeTimeType {
  reverse?: boolean;
  title: string;
  image: string;
  alt: string;
}

const FreeTimeItem = ({ reverse, title, image, alt }: FreeTimeType) => {
  return (
    <div className="px-4 md:pl-24 lg:pl-52">
      <div
        className={`${
          reverse ? "flex-col-reverse" : "flex-col"
        } flex gap-5 w-[15.625rem] md:w-[25rem] `}
      >
        <div className="overflow-hidden border-2 border-accent rounded-[20px] border-opacity-50 lg:rounded-[30px]">
          <div
            data-cursor-text={alt.toLowerCase()}
            className="block scale-110 rotate-3 transition duration-500 hover:scale-100 hover:rotate-0 opacity-80"
          >
            <Image src={image} alt={alt} width={500} height={375} />
          </div>
        </div>
        <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
      </div>
    </div>
  );
};

export default FreeTimeItem;
