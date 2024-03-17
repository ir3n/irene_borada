import React from "react";
import Image from "next/image";

const RotatingFlower = () => {
  return (
    <div className="max-w-11 lg:max-w-24 xl:max-w-max inline-block">
      <Image
        src="/images/icons/flower.svg"
        alt="Flower"
        width={115}
        height={115}
      />
    </div>
  );
};

export default RotatingFlower;
