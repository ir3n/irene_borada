import React from "react";
import HorizontalScroll from "../HorizontalScroll";
import TitleWithText from "../TitleWithText";
import WorkItem from "./WorkItem";

export const Work = () => {
  return (
    <>
      <TitleWithText
        title={"Work"}
        text={
          "<p>Since July 2019 I working at my first company , <em>Rocket Path PC.</em>some words about the company and my role. imply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Messor at Hampden-Sydney College in Virginia, looked up one of the more obscure  Lorem Ipsum, consectetur, from a </p><p>Since July 2019 I working at my first company , <em>Rocket Path PC</em> some words about the company and my role. imply random text. It has roots</p><p>Since there is not much time for projects of my own, but here are some examples where either my help was big or made it almost on my own. Of course everything belongs to Rocket Path.</p>"
        }
      />
      <HorizontalScroll>
        <div className="w-screen">
          <WorkItem />
        </div>
        <div className="w-screen">
          <WorkItem />
        </div>
      </HorizontalScroll>
    </>
  );
};
