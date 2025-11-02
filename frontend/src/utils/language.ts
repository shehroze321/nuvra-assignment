export function getSavedLanguage(): string {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem("language") || "en";
}
export function savedLanguage(lang: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
}
