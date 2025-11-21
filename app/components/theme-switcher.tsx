"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { RelunaButton } from "@/components/reluna-button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9" /> // Placeholder to avoid layout shift
    );
  }

  const isDark = theme === "dark" || theme === "reluna-dark";

  return (
    <RelunaButton
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="transition-transform hover:scale-110"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-warning" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </RelunaButton>
  );
}
