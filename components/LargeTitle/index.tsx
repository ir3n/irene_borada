import SlideFromBelow from "../SlideFromBelow";

function LargeTitle({ title }: { title: string }) {
  return (
    <h2 className={`intro-title mb-3`}>
      <SlideFromBelow>
        <span className="font-serif larger-font accent-color">{title}</span>
      </SlideFromBelow>
    </h2>
  );
}

export default LargeTitle;
