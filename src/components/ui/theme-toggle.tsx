"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";
  return <button aria-label="Toggle color theme" onClick={() => setTheme(isDark ? "light" : "dark")} className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:bg-ink/5"><span aria-hidden suppressHydrationWarning>{mounted ? (isDark ? "☀" : "◐") : "◐"}</span></button>;
}
