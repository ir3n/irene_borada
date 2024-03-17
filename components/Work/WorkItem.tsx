import React from "react";
import Image from "next/image";

const WorkItem = () => {
  return (
    <div className="min-[1025px]:flex min-h-screen w-full">
      <div className="relative min-[1025px]:w-3/5 lg:h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[620px]">
        <Image
          src={"/images/work/thanassis.jpg"}
          alt="Test"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="min-[1025px]:w-2/5 lg:pl-20 lg:pr-40 flex items-center">
        <div className="px-4 py-6 sm:py-16 min-[1025px]:p-0">
          <h3 className="small-title pb-2">Thanassis Mavrakis</h3>
          <p className="text pb-4">Portfolio for a designer</p>
          <hr />
          <p className="text pt-4">
            Main technologies used:
            <br />
            NextJs | TypeScript | Tailwind CSS | Lenis Scroll
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
