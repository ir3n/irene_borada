import Container from "../Container";
import Image from "next/image";

const Study = () => {
  return (
    <div className="px-4 lg:pl-52 w-[310px] md:w-[600px] lg:w-[1000px] xl:w-[1100px]">
      <div className="relative">
        <div className="opacity-5 w-fit mx-auto max-w-[150px] md:max-w-[200px] lg:max-w-[400px] xl:max-w-full absolute lg:relative md:left-0 right-0 m-auto">
          <Image
            src={"/images/certificate.svg"}
            alt={"Certificate"}
            width={545}
            height={454}
          />
        </div>
        <div className="lg:absolute top-0 left-0 right-0 mx-auto lg:flex gap-14 justify-between items-center h-full">
          <div className="mb-4 lg:mb-0">
            <div className="text mb-2">2018 - Today</div>
            <h4 className="small-title">
              Online Courses
              <br /> & Certifications{" "}
            </h4>
          </div>
          <div className="text">
            Some include:
            <ul>
              <li>
                <a target="_blank" href="#">
                  Mosh Hamedani test write about 5 links
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  Mosh Hamedani test write about 5 links
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  Mosh Hamedani test write about 5 links
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  Mosh Hamedani test write about 5 links
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  Mosh Hamedani test write about 5 links
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
