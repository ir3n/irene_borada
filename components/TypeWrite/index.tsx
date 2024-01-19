"use client";

import { TypeAnimation } from "react-type-animation";
import { Suranna } from "next/font/google";
const serif = Suranna({
  weight: ["400"],
  subsets: ["latin"],
});

const TypeWrite = ({ text }) => {
  return (
    <span className={serif.className}>
      <TypeAnimation
        sequence={text}
        wrapper="span"
        speed={20}
        className="typewritter serif-font"
        style={{ display: "inline-block", color: "#4A5CFF" }}
      />
    </span>
  );
};

export default TypeWrite;
