import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from ".";

const WorkItem = ({ title, intro, text, image, link }: Project) => {
  const cursorText = link ? "visit website" : "current website";
  return (
    <div className="lg:flex min-h-screen w-full">
      <div
        className="relative lg:w-3/5 lg:h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[620px]"
        data-cursor-text={cursorText}
        data-cursor="dark"
      >
        {link ? (
          <Link href={link} target="_blank">
            <Image
              src={image}
              alt="Test"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt="Test"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        )}

        <div className="lg:hidden bg-accent text-white text-sm leading-[1] w-20 h-20 rounded-full absolute right-4 bottom-0 translate-y-4 sm:translate-y-1/2 text-center flex items-center">
          {link ? (
            <Link href={link} target="_blank">
              {cursorText}
            </Link>
          ) : (
            cursorText
          )}
        </div>
      </div>
      <div className="lg:w-2/5 lg:pl-20 lg:pr-40 flex items-center">
        <div className="px-4 md:px-24 py-6 sm:py-16 lg:p-0">
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
