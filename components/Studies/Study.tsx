import Image from "next/image";
import { StudyItem } from ".";

const Study = ({ date, title, text, image }: StudyItem) => {
  return (
    <div className="px-4 lg:pl-52 w-[310px] md:w-[600px] lg:w-[1000px] xl:w-[1100px]">
      <div className="relative">
        <div className="opacity-5 w-fit mx-auto max-w-[150px] md:max-w-[200px] lg:max-w-[400px] xl:max-w-full absolute lg:relative md:left-0 right-0 m-auto">
          <Image src={image} alt={title} width={545} height={454} />
        </div>
        <div className="lg:absolute top-0 left-0 right-0 mx-auto lg:flex gap-14 justify-between items-center h-full">
          <div className="mb-4 lg:mb-0">
            <div className="text mb-2">{date}</div>
            <h4 className="small-title">{title}</h4>
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Study;
