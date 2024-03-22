"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import RotatingText from "./RotatingText";

interface SocialIcon {
  name: string;
  icon: string;
  url: string;
}

function SocialIcon({ name, icon, url }: SocialIcon) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="rounded-full relative overflow-hidden"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Link href={url} target="_blank">
        <div
          className={`opacity-${
            hover ? "none" : "0"
          } transition-all duration-500 hidden lg:block scale-${
            hover ? "0" : "50"
          }`}
        >
          <RotatingText title={name} />
        </div>
        <div className="w-10 lg:w-14 h-10 lg:h-14 flex items-center justify-center p-2.5 lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]">
          <Image src={icon} width={28} height={28} alt={name} />
        </div>
      </Link>
    </div>
  );
}

export default SocialIcon;
