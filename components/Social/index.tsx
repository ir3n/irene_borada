import Link from "next/link";
import Image from "next/image";
import socialIcons from "@/data/social.json";

interface SocialIcon {
  name: string;
  icon: string;
  url: string;
}

const Social = () => {
  return (
    <div className="fixed left-0 md:left-auto bottom-14 md:bottom-auto right-0 md:right-3 lg:right-16 md:top-0 md:h-full lg:w-14 flex flex-col">
      <ul className="flex w-full md:w-fit md:h-full md:flex-col justify-center gap-5 lg:gap-10">
        {socialIcons?.map((icon: SocialIcon) => (
          <li key={`social-icon-${icon?.name}`}>
            <Link href={icon?.url} target="_blank">
              <div className="rounded-full w-10 lg:w-14 h-10 lg:h-14 flex items-center justify-center p-2.5">
                <Image
                  src={icon?.icon}
                  width={30}
                  height={30}
                  alt={icon?.name}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
