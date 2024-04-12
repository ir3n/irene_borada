"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsVisible } from "@/hooks/useIsVisible";

interface Project {
  title: string;
  intro: string;
  text: string;
  image: string;
  link: string | null;
}

const WorkItem = ({ title, intro, text, image, link }: Project) => {
  const showRef = useRef<HTMLDivElement>(null);

  const cursorText = link ? "visit website" : "current website";

  const show = useIsVisible(showRef);

  return (
    <div className="lg:flex min-h-screen w-screen">
      <div ref={showRef} className="lg:w-3/5 h-[40vh] sm:h-[50vh] lg:h-screen">
        <div className="relative w-full h-full">
          <div
            className={`relative w-full h-full transition duration-1000 delay-200 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {link ? (
              <Link
                href={link}
                target="_blank"
                data-cursor-text={cursorText}
                aria-label={cursorText}
              >
                <Image
                  src={image}
                  alt={title}
                  width={1480}
                  height={1440}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            ) : (
              <Image
                src={image}
                alt={title}
                width={1480}
                height={1440}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          {link ? (
            <Link href={link} target="_blank" aria-label={title}>
              <div className="lg:hidden bg-accent text-white text-sm leading-[1] w-20 h-20 rounded-full absolute bottom-4 left-4 md:left-auto md:right-32 text-center flex items-center">
                {cursorText}
              </div>
            </Link>
          ) : (
            <div className="lg:hidden bg-accent text-white text-sm leading-[1] w-20 h-20 rounded-full absolute bottom-4 left-4 md:left-auto md:right-32 text-center flex items-center">
              {cursorText}
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-2/5 lg:pl-10 xl:pl-32 lg:pr-52 xl:pr-60 flex items-center">
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
