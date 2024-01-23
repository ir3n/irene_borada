"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";

const MouseFollowerComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      skewing: 3,
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return <div className="mf-container">{children}</div>;
};

export default MouseFollowerComponent;
