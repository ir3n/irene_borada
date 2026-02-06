import { SparklesIcon } from "@heroicons/react/24/outline";

export function GradientSparklesIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="sparkles-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
      </defs>

      <SparklesIcon stroke="url(#sparkles-gradient)" strokeWidth={0.5} />
    </svg>
  );
}
