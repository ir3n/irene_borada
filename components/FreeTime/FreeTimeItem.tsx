import Image from "next/image";

const FreeTimeItem = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className="px-4 lg:pl-52">
      <div
        className={`${
          reverse ? "flex-col-reverse" : "flex-col"
        } flex gap-5 w-[250px] md:w-[400px]`}
      >
        <div className="">
          <Image
            src={"/images/free-time/satoru.jpg"}
            alt={"Rukia"}
            width={400}
            height={400}
          />
        </div>
        <div className="text">
          Walking in <em>nature</em> refills my batteries.
        </div>
      </div>
    </div>
  );
};

export default FreeTimeItem;
