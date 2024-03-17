import Link from "next/link";
import Image from "next/image";

const socialIcons = [
  {
    name: "Linkedin",
    icon: "images/social/linkedin.svg",
    url: "https://www.linkedin.com/in/irene-borada",
  },
  {
    name: "Mail",
    icon: "images/social/email.svg",
    url: "mailto:iren.borada@gmail.com",
  },
  {
    name: "Github",
    icon: "images/social/github.svg",
    url: "https://github.com/ir3n?tab=repositories",
  },
  {
    name: "Shutterstock",
    icon: "images/social/shutterstock.svg",
    url: "https://www.shutterstock.com/g/Ir3n?_gl=1*1xwdj7w*_ga*Njk0MDY2NzIuMTcwMDk0NDQ2OQ..*_ga_5JRYE4Y8J9*MTcwNjk3ODEwMS40OC4xLjE3MDY5NzgxNjQuNTcuMC4w*_fplc*c1A1S3ZVUXQlMkZ5ZGZwSTJvQUs1eE9ia3ZZTzZaVHFBZ1NPOUxYUWxXYmclMkZhaWRUdXNpWDFEd3BNRkZ5UzlDb2FMYndrWFU4ckIyUkclMkZSR0d0SXVGWmdSSGVzVTM2endQaUZqOWlqZ2UlMkZKMFZNaUloVGpibjdJR1RpdklNZlElM0QlM0Q.&rid=329947358",
  },
];

const Social = () => {
  return (
    <ul className="flex w-full md:w-fit md:h-full md:flex-col justify-center gap-5 lg:gap-10">
      {socialIcons?.map((icon) => (
        <li key={`social-icon-${icon?.name}`} data-magnetic>
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
