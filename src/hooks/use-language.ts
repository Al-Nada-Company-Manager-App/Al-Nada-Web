"use client";

import { useLanguageContext } from "@/providers/language-provider";

export function useLanguage() {
  return useLanguageContext();
}
