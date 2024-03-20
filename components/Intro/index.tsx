import { useRef } from "react";
import HorizontalScroll from "../HorizontalScroll";
import Container from "../Container";
import RotatingFlower from "../RotatingFlower";
import { useAnimatedTitle } from "@/hooks/useAnimatedTitle";

const Intro = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const jsRef = useRef<HTMLSpanElement>(null);

  useAnimatedTitle(nameRef);
  useAnimatedTitle(jsRef);

  return (
    <HorizontalScroll>
      <div className="section w-screen">
        <Container>
          <div className="intro-title block ">
            Hello.
            <br />
            My name
            <br />
            is
            <span
              ref={nameRef}
              className="ml-3 lg:ml-5 inline-flex items-baseline"
            >
              <RotatingFlower />
              <span data-cursor-img="/images/irene.png">
                <span className="font-serif accent-color larger-font inline-block ml-2">
                  Irene.
                </span>
              </span>
            </span>
          </div>
        </Container>
      </div>
      <div className="section w-screen">
        <Container>
          <div className="intro-title">A front-end developer</div>
          <div className="sub mt-8 lg:mt-14 xl:mt-24">
            trying to conquer the <br />
            <span
              ref={jsRef}
              className="font-serif accent-color larger-font inline-block mr-3 lg:mr-5"
            >
              Javascript
            </span>
            world.
          </div>
        </Container>
      </div>
    </HorizontalScroll>
  );
};

export default Intro;
