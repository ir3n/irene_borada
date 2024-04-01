import SlideFromBelow from "../SlideFromBelow";

function LargeTitle({ title }: { title: string }) {
  return (
    <h2 className={`mb-3`}>
      <SlideFromBelow>
        <span className="font-serif large-title accent-color">{title}</span>
      </SlideFromBelow>
    </h2>
  );
}

export default LargeTitle;
