import Image from "next/image";
import Container from "../Container";
import RotatingFlower from "../RotatingFlower";
import { ArrowUp } from "lucide-react";
import { accentColor } from "@/constants";

const Outro = () => {
  const goBackToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="section relative">
        <Container>
          <div className="intro-title block">
            Thanks for meeting
            <span className="ml-5 inline-block">
              <RotatingFlower />
            </span>
            <br />
            with me!
          </div>
          <div
            onClick={goBackToTop}
            className="md:mt-16 text flex items-center leading-[1.1] gap-x-1.5 cursor-pointer w-fit"
          >
            go back to the <em>start</em>
            <span className="max-w-[40px] md:max-w-full mb-2">
              <ArrowUp color={accentColor} size={60} />
            </span>
          </div>
        </Container>
        <div className="note text-right absolute right-4 lg:right-[50px] bottom-4 lg:bottom-[50px]">
          designed & developed by Irene Borada
          <br />©{new Date().getFullYear()}
        </div>
      </div>
    </>
  );
};

export default Outro;
