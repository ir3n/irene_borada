const CircleHover = (color, wording) => {
  return (
    <div
      className={`w-36 h-36 hidden lg:flex items-center justify-center rounded-full bg-${color}`}
    >
      {wording}
    </div>
  );
};

export default CircleHover;
