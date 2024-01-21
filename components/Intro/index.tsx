import Image from "next/image";

import HorizontalScroll from "../HorizontalScroll";

const Intro = () => {
  const lowerCursorZindex = () => {
    console.log("mouse enter");
    if (document?.getElementById("c-cursor")) {
      document.getElementById("c-cursor").style.zIndex = "5";
    }
  };
  const augmentCursorZindex = () => {
    console.log("mouse leave");

    if (document?.getElementById("c-cursor")) {
      document.getElementById("c-cursor").style.zIndex = "999";
    }
  };
  return (
    <>
      <HorizontalScroll>
        <div className="section w-screen">
          <div className="intro-title block">
            Hello.
            <br />
            My name
            <br />
            is
            <span className="mx-5 inline-flex items-baseline relative z-[6]">
              <Image
                src="/images/flower.svg"
                alt="Flower"
                width={115}
                height={115}
                style={{ display: "inline-block" }}
              />
              <span
                data-cursor-background-image="/images/irene.png"
                data-cursor-size="200px"
                onMouseEnter={lowerCursorZindex}
                onMouseLeave={augmentCursorZindex}
              >
                <span className={`serif-font accent-color inline-block`}>
                  Irene.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="section w-screen">
          <div className="intro-title">A front-end developer</div>
          <div className="sub mt-24">
            trying to conquer the{" "}
            <span className={`serif-font accent-color`}>Javascript </span>
            world.
          </div>
        </div>
      </HorizontalScroll>
    </>
  );
};

export default Intro;
