import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";

interface StudyItem {
  date: string;
  title: string;
  text: string;
  image: string;
  even?: boolean;
}

enum TranslateX {
  forOdd = "translate-x-[-50px] lg:translate-x-0",
  forEven = "translate-x-[50px] lg:translate-x-0",
}

const Study = ({ date, title, text, image, even }: StudyItem) => {
  const [translateX, setTranslateX] = useState(TranslateX.forOdd);
  const itemRef = useRef<HTMLDivElement>(null);

  const show = useIsVisible(itemRef);

  useEffect(() => {
    even && setTranslateX(TranslateX.forEven);
  }, [even]);

  return (
    <div
      ref={itemRef}
      className={`border-2 border-accent border-opacity-50 rounded-[10px] lg:rounded-[20px] overflow-hidden px-5 py-3 md:p-5 lg:p-8 xl:p-12 w-full md:w-[90%] lg:w-full transition-[opacity,transform] duration-[2000ms] delay-100 ${
        !even && "ml-auto"
      } ${
        show ? "opacity-100 translate-y-0 " : "opacity-0 lg:translate-y-20"
      } ${show ? "translate-x-0" : translateX}`}
    >
      <div className="relative h-full py-10">
        <div className="opacity-10 absolute top-0 right-0 w-1/2">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            style={{ maxHeight: "200px", width: "auto", margin: "0 auto" }}
          />
        </div>
        <div className="relative z-[1]">
          <div className="mb-6 max-w-[25rem]">
            <div className="text mb-2">{date}</div>
            <h3 className="small-title">{title}</h3>
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
