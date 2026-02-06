import { useContext, useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { MenuContext } from "@/providers/menu-provider";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const { open } = useContext(MenuContext);

  const [mounted, setMounted] = useState(false);

  // Only render after mount to prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  let colorClass = open ? "text-dark" : "text-accent";

  const isLight = theme === "light";

  return (
    <button
      type="button"
      aria-label={`Set to ${isLight ? "dark" : "light"} mode`}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="hover:lg:scale-[1.3] transition duration-500"
    >
      {theme === "light" ? (
        <MoonIcon className={`w-7 h-7 stroke-2 ${colorClass}`} />
      ) : (
        <SunIcon className={`w-7 h-7 stroke-2 ${colorClass}`} />
      )}
    </button>
  );
};

export default ThemeToggle;
