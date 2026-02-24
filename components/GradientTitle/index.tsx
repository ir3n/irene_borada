type GradientTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientTitle({ children, className }: GradientTitleProps) {
  return (
    <span
      className={`relative font-extrabold text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[15rem] leading-none gradient-border-title text-light dark:text-dark ${className}`}
    >
      {children}
    </span>
  );
}
