"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { StudyItem } from ".";
import { useIsVisible } from "@/hooks/useIsVisible";

enum TranslateX {
  forOdd = "translate-x-[-50px] min-[1300px]:translate-x-0",
  forEven = "translate-x-[50px] min-[1300px]:translate-x-0",
}

const Study = ({ date, title, text, image, even }: StudyItem) => {
  const [translateX, setTranslateX] = useState(TranslateX.forOdd);
  const itemRef = useRef(null);

  const show = useIsVisible(itemRef);

  useEffect(() => {
    even && setTranslateX(TranslateX.forEven);
  }, [even]);

  return (
    <div
      ref={itemRef}
      className={`border-2 border-accent rounded-[20px] lg:rounded-[30px] overflow-hidden p-5 lg:p-8 xl:p-12 mb-5 lg:mb-20 xl:mb-40 md:w-[90%] min-[1300px]:w-full transition duration-[2000ms] delay-100 ${
        !even && "md:ml-auto"
      } ${
        show
          ? "opacity-100 translate-y-0 "
          : "opacity-0 min-[1300px]:translate-y-1/4"
      } ${show ? "translate-x-0" : translateX}`}
    >
      <div className="relative h-full py-10">
        <div className="opacity-5 absolute top-0 right-0 w-1/2">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            style={{ maxHeight: "300px", width: "auto", margin: "0 auto" }}
          />
        </div>
        <div className="relative z-[1]">
          <div className="mb-6 max-w-[25rem]">
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
