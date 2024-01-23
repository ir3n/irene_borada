import Link from "next/link";
import Image from "next/image";

const socialIcons = [
  {
    name: "Linkedin",
    icon: "images/linkedin.svg",
    url: "https://www.linkedin.com/in/irene-borada",
  },
  // {
  //   name: "Linkedin",
  //   icon: "images/linkedin.svg",
  //   url: "https://www.linkedin.com/in/irene-borada",
  // },
];

const Social = () => {
  return (
    <ul className="h-full flex flex-col justify-center gap-y-10">
      {socialIcons?.map((icon) => (
        <li key={`social-icon-${icon?.name}`}>
          <Link href={icon?.url}>
            <div className="rounded-full w-10 lg:w-14 h-10 lg:h-14 flex items-center justify-center p-2.5">
              <Image src={icon?.icon} width={30} height={30} alt={icon?.name} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
