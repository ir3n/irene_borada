import { useRef } from "react";
import Image from "next/image";
import { useIsVisible } from "@/hooks/useIsVisible";

interface FreeTimeType {
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
}

const FreeTimeItem = ({ title, image, alt, reverse }: FreeTimeType) => {
  const itemRef = useRef(null);

  const show = useIsVisible(itemRef);

  return (
    <div
      className={`flex gap-3 md:gap-5 w-11/12 md:w-full max-w-[535px] md:m-auto ${
        reverse ? "ml-auto flex-col md:flex-col-reverse" : "flex-col"
      }`}
    >
      <div
        data-cursor-text={alt.toLowerCase()}
        ref={itemRef}
        className={`block  transition duration-1000 delay-100 hover:lg:scale-105 rounded-[10px] lg:rounded-[20px] overflow-hidden ${
          show ? "opacity-100 md:translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Image src={image} alt={alt} width={535} height={375} />
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
    </div>
  );
};

export default FreeTimeItem;
