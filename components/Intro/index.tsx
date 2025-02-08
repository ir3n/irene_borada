import HorizontalScroll from "../HorizontalScroll";
import Container from "../Container";
import RotatingFlower from "../RotatingFlower";
import SlideFromBelow from "../SlideFromBelow";

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
              <span className="ml-3 lg:ml-5 inline-flex items-baseline mt-[-1rem] xl:mt-[-2rem]">
                <RotatingFlower />
                <span data-cursor-img="/images/irene.png">
                  <span className="font-serif text-accent larger-font inline-block ml-2">
                    Irene.
                  </span>
                </span>
              </span>
            </SlideFromBelow>
          </div>
        </Container>
      </div>
      <div className="full-h-section w-screen">
        <Container>
          <div className="intro-title">
            <SlideFromBelow>A front-end</SlideFromBelow>
            <SlideFromBelow order={1}>developer</SlideFromBelow>
          </div>
          <div className="sub mt-8 lg:mt-14 xl:mt-16">
            <SlideFromBelow order={2}>trying to conquer the</SlideFromBelow>
            <SlideFromBelow order={3}>
              <span className="font-serif text-accent larger-font inline-block mx-3 lg:mx-5 mt-[-0.3rem] lg:mt-[-1rem] xl:mt-[-1.8rem]">
                JavaScript
              </span>
              world.
            </SlideFromBelow>
          </div>
        </Container>
      </div>
    </HorizontalScroll>
  );
};

export default Intro;
