import Image from "next/image";
import { StudyItem } from ".";

const Study = ({ date, title, text, image }: StudyItem) => {
  return (
    <div className="px-4 lg:pl-52 w-[310px] md:w-[600px] lg:w-[1000px] xl:w-[1100px] h-full">
      <div className="relative h-full">
        <div className="opacity-5 absolute top-0 lg:top-[50%] md:left-0 right-0 m-auto lg:translate-y-[-50%] max-w-[150px] md:max-w-[200px] lg:max-w-full">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            style={{ maxHeight: "300px", width: "auto", margin: "0 auto" }}
          />
        </div>
        <div className="mx-auto lg:flex gap-14 items-center h-full relative z-[1]">
          <div className="mb-4 lg:mb-0 lg:max-w-80">
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
