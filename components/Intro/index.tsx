import Image from "next/image";
import TypeWrite from "../TypeWrite";

const Intro = () => {
  return (
    <>
      <div className="intro-title">
        <span>
          Hello.
          <br />
          My name
          <br />
          is
          <span
            data-cursor-background-image="/images/flower.svg"
            data-cursor-size="200px"
            className="image-cursor"
          >
            <span className="mx-5 inline-flex">
              <Image
                src="/images/flower.svg"
                alt="Flower"
                width={115}
                height={115}
                style={{ display: "inline-block" }}
              />
            </span>

            <TypeWrite text={["Irene."]} />
          </span>
        </span>
      </div>
    </>
  );
};

export default Intro;
