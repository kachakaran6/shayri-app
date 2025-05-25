// hooks/useDarkMode.ts

import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setEnabled(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !enabled;
    setEnabled(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return [enabled, toggleTheme] as const;
}
