import Image from "next/image";
import Container from "../Container";
import RotatingFlower from "../RotatingFlower";

const Outro = () => {
  return (
    <>
      <div className="section">
        <Container>
          <div className="intro-title block">
            Thanks for meeting
            <span className="ml-5 inline-block">
              <RotatingFlower />
            </span>
            <br />
            with me!
          </div>
          <div className="mt-16 text flex items-end	leading-[1.1] gap-x-1.5 cursor-pointer">
            go back to the <em>start</em>
            <span className="">
              <Image
                src="/images/arrow-up.svg"
                alt="Back to top"
                width={50}
                height={50}
                style={{ display: "inline-block" }}
              />
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Outro;
