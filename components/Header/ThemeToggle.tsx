import { useContext, useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { MenuContext } from "@/providers/menu-provider";
import { accentColor, darkColor } from "@/constants";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const { open } = useContext(MenuContext);

  let color = open ? darkColor : accentColor;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label={`Set to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:lg:scale-[1.3] transition duration-500"
    >
      {theme === "light" ? <Moon color={color} /> : <Sun color={color} />}
    </button>
  );
};

export default ThemeToggle;
