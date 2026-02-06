import HorizontalScroll from "../HorizontalScroll";
import Container from "../Container";
import SlideFromBelow from "../SlideFromBelow";
import { GradientTitle } from "../GradientTitle";
import GradientSparkles from "../Icons/GradientSparkles";

const Intro = () => {
  return (
    <HorizontalScroll>
      <div className="full-h-section w-screen">
        <Container>
          <div className="intro-title lg:mt-24">
            <SlideFromBelow>Hello.</SlideFromBelow>
            <SlideFromBelow order={1}>My name</SlideFromBelow>
            <SlideFromBelow order={2}>
              is
              <GradientTitle className="ml-3 lg:ml-11">IRENE</GradientTitle>
            </SlideFromBelow>
          </div>
        </Container>
      </div>
      <div className="full-h-section w-screen">
        <Container>
          <div className="sub">
            <SlideFromBelow>I transform designs into</SlideFromBelow>
          </div>
          <div className="intro-title mt-8 lg:mt-10 xl:mt-16">
            <SlideFromBelow order={1}>
              great user
              <GradientSparkles className="inline max-w-10 sm:max-w-16 md:max-w-32 lg:max-w-44" />
            </SlideFromBelow>
            <SlideFromBelow order={2}>experiences</SlideFromBelow>
          </div>
        </Container>
      </div>
    </HorizontalScroll>
  );
};

export default Intro;
