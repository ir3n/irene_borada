import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FreeTimeType } from ".";
import { useIsVisible } from "@/hooks/useIsVisible";

const FreeTimeItem = ({ title, image, alt }: FreeTimeType) => {
  const [seen, setSeen] = useState(false);

  const itemRef = useRef(null);

  const show = useIsVisible(itemRef);

  useEffect(() => {
    show && setSeen(true);
  }, [show]);

  return (
    <div
      ref={itemRef}
      className={`pb-10 lg:pb-20 xl:pb-32 max-w-[600px] transition duration-[2000ms] delay-100 ${
        seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/3"
      }`}
    >
      <div className="overflow-hidden rounded-3xl lg:rounded-[40px] mb-3 lg:mb-5">
        <div
          data-cursor-text={alt.toLowerCase()}
          className={`block transition duration-1000 hover:scale-100 ${
            seen ? "scale-110" : "scale-125"
          }`}
        >
          <Image src={image} alt={alt} width={600} height={800} />
        </div>
      </div>
      <div className="text" dangerouslySetInnerHTML={{ __html: title }}></div>
    </div>
  );
};

export default FreeTimeItem;
