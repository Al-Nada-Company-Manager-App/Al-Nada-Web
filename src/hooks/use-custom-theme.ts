"use client";

import { useTheme } from "next-themes";

export function useCustomTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  return { theme, setTheme, systemTheme };
}
