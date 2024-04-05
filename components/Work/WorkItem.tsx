import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsVisible } from "@/hooks/useIsVisible";
import gsap from "gsap";

interface Project {
  title: string;
  intro: string;
  text: string;
  image: string;
  link: string | null;
}

const WorkItem = ({ title, intro, text, image, link }: Project) => {
  const showRef = useRef(null);
  const animateRef = useRef(null);

  const cursorText = link ? "visit website" : "current website";

  const show = useIsVisible(showRef);

  useEffect(() => {
    const tl = gsap.timeline();
    const elementToAnimate = animateRef?.current;

    show &&
      tl.fromTo(
        elementToAnimate,
        { width: "0" },
        { width: "100%", duration: 2, delay: 0.5 }
      );
  }, [show]);

  return (
    <div className="lg:flex h-screen w-full">
      <div
        ref={showRef}
        className="relative lg:w-3/5 h-[50vh] lg:h-auto"
        data-cursor-text={cursorText}
      >
        <div ref={animateRef} className="overflow-hidden w-full h-full">
          <div className="relative w-full h-full">
            {link ? (
              <Link href={link} target="_blank">
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    maxWidth: "unset",
                  }}
                />
              </Link>
            ) : (
              <Image
                src={image}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  maxWidth: "unset",
                }}
              />
            )}
          </div>
        </div>

        {link ? (
          <Link href={link} target="_blank">
            <div className="lg:hidden bg-accent text-white text-sm leading-[1] w-20 h-20 rounded-full absolute left-4 bottom-4 text-center flex items-center">
              {cursorText}
            </div>
          </Link>
        ) : (
          <div className="lg:hidden bg-accent text-white text-sm leading-[1] w-20 h-20 rounded-full absolute left-4 bottom-4 text-center flex items-center">
            {cursorText}
          </div>
        )}
      </div>
      <div className="lg:w-2/5 lg:pl-20 lg:pr-40 flex items-center">
        <div className="px-4 md:px-24 py-8 lg:p-0">
          <h3 className="small-title pb-2">{title}</h3>
          <p className="text pb-4">{intro}</p>
          <hr />
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="text pt-4"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
