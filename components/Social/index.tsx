"use client";

import { useContext, useState, useEffect } from "react";
import { CurrentSectionContext } from "@/providers/currentSection-provider";

import SocialIcon from "./SocialIcon";

import socialIcons from "@/data/social.json";

const Social = () => {
  const [hidden, setHidden] = useState(false);

  const { currentSection } = useContext(CurrentSectionContext);

  // const topOrBottom = () => {
  //   console.log(window.scrollY);
  // };

  useEffect(() => {
    setHidden(!(currentSection === "intro" || currentSection === "outro"));
  }, [currentSection]);

  // useEffect(() => {
  //   typeof window !== "undefined" &&
  //     window.addEventListener("scroll", topOrBottom);

  //   return () => {
  //     typeof window !== "undefined" &&
  //       window.removeEventListener("scroll", topOrBottom);
  //   };
  // }, []);

  return (
    <div
      className={`fixed left-0 md:left-auto bottom-14 md:bottom-auto right-0 md:right-3 lg:right-8 md:top-0 md:h-full lg:w-28 xl:w-32 flex flex-col transition duration-700 ${
        hidden && "translate-x-[110%]"
      }`}
    >
      <ul className="flex w-full md:w-fit md:h-full md:flex-col justify-center gap-5 lg:gap-0">
        {socialIcons?.map((icon: SocialIcon) => (
          <li key={`social-icon-${icon?.name}`}>
            <SocialIcon name={icon?.name} icon={icon?.icon} url={icon?.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
