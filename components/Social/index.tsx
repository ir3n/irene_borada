import SocialIcon from "./SocialIcon";

import socialIcons from "@/data/social.json";

const Social = () => {
  return (
    <div className="fixed left-0 md:left-auto bottom-14 md:bottom-auto right-0 md:right-3 lg:right-8 md:top-0 md:h-full lg:w-32 flex flex-col">
      <ul className="flex w-full md:w-fit md:h-full md:flex-col justify-center gap-5 lg:gap-1">
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
