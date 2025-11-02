import { useEffect, useState } from "react";
import { getSavedLanguage } from "@/utils/language";
import en from "@/translations/en/translations.json";
import ro from "@/translations/ro/transaltions.json";

const allTranslations: Record<string, any> = { en, ro };

export function useTranslation() {
  const [language, setLanguage] = useState("en");
  const [t, setT] = useState(allTranslations.en);

  useEffect(() => {
    const lang = getSavedLanguage();
    // avoid sync state updates (hydration safety)
    Promise.resolve().then(() => {
      setLanguage(lang);
      setT(allTranslations[lang] || allTranslations.en);
    });
  }, []);

  return { t, language, setLanguage };
}
