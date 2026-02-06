import { useState } from "react";
import Link from "next/link";
import RotatingText from "./RotatingText";
import LinkedinIcon from "@/components/Icons/Social/LinkedinIcon";
import EmailIcon from "@/components/Icons/Social/EmailIcon";
import GithubIcon from "@/components/Icons/Social/GithubIcon";
import ShutterstockIcon from "@/components/Icons/Social/ShutterstockIcon";

const ICONS = {
  linkedin: LinkedinIcon,
  email: EmailIcon,
  github: GithubIcon,
  shutterstock: ShutterstockIcon,
};

type IconName = keyof typeof ICONS;

export type SocialIconType = {
  name: IconName;
  url: string;
};

function SocialIcon({ name, url }: SocialIconType) {
  const [hover, setHover] = useState(false);

  const Icon = ICONS[name];

  return (
    <Link
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      href={url}
      target="_blank"
      aria-label={name}
      className="block rounded-full relative overflow-hidden"
    >
      <div
        className={`${
          hover ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } hidden lg:block transition-all duration-500`}
      >
        <RotatingText title={name} />
      </div>
      <div
        className={`w-12 lg:w-14 h-12 lg:h-14 flex items-center justify-center p-2.5 lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] transition-color duration-500 text-accent ${hover && "lg:text-secondary"}`}
      >
        <Icon />
      </div>
    </Link>
  );
}

export default SocialIcon;
