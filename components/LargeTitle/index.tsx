import SlideFromBelow from "../SlideFromBelow";

function LargeTitle({ title }: { title: string }) {
  return (
    <h2 className={`mb-3`}>
      <SlideFromBelow>
        <span className="large-title text-accent">{title}</span>
      </SlideFromBelow>
    </h2>
  );
}

export default LargeTitle;
