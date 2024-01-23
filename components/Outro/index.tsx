import Image from "next/image";
import Container from "../Container";

const Outro = () => {
  return (
    <>
      <div className="section">
        <Container>
          <div className="intro-title block">
            Thanks for meeting
            <span className="ml-5 inline-block">
              <Image
                src="/images/flower.svg"
                alt="Flower"
                width={115}
                height={115}
                style={{ display: "inline-block" }}
              />
            </span>
            <br />
            with me!
          </div>
          <div className="mt-16 text">
            <span data-cursor-img="/images/arrow-up.svg" data-cursor="-sm">
              go back to the <em>start</em>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Outro;
