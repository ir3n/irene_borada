"use client";

import { useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";

interface FreeTimeType {
  reverse?: boolean;
  title: string;
  image: string;
  alt: string;
}

const FreeTimeItem = ({ reverse, title, image, alt }: FreeTimeType) => {
  const itemRef = useRef(null);

  const show = useIsVisible(itemRef);

  return (
    <div
      className={`${
        reverse ? "flex-col-reverse" : "flex-col"
      } flex gap-5 w-[18rem] md:w-[26rem] xl:w-[30rem]`}
    >
      <div
        ref={itemRef}
        className="overflow-hidden rounded-[20px] border-opacity-50 lg:rounded-[30px]"
      >
        <div
          data-cursor-text={alt.toLowerCase()}
          className={`block transition duration-1000 delay-100 ${
            show ? "scale-100 rotate-0" : "scale-110 rotate-3"
          }`}
        >
          <Image src={image} alt={alt} width={500} height={375} />
        </div>
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
    </div>
  );
};

export default FreeTimeItem;
