import Image from "next/image";
import HorizontalScroll from "../HorizontalScroll";
import Container from "../Container";

const Intro = () => {
  return (
    <>
      <HorizontalScroll>
        <div className="section w-screen">
          <Container>
            <div className="intro-title block ">
              Hello.
              <br />
              My name
              <br />
              is
              <span className="mx-5 inline-flex items-baseline">
                <Image
                  src="/images/flower.svg"
                  alt="Flower"
                  width={115}
                  height={115}
                  style={{ display: "inline-block" }}
                />
                <span data-cursor-img="/images/irene.png">
                  <span className={`font-serif accent-color inline-block`}>
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
            <div className="sub mt-24">
              trying to conquer the{" "}
              <span className={`font-serif accent-color`}>Javascript </span>
              world.
            </div>
          </Container>
        </div>
      </HorizontalScroll>
    </>
  );
};

export default Intro;
