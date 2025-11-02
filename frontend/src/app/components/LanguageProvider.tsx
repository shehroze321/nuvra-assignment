"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSavedLanguage, savedLanguage } from "@/utils/language";

interface LanguageType {
  lang: string;
  setLang: (lang: string) => void;
}

const languageContext = createContext<LanguageType>({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = getSavedLanguage();
    if (saved && saved !== lang) setLang(saved);
  }, []);

  useEffect(() => {
    console.log("Language changed to:", lang);
  }, [lang]);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    savedLanguage(newLang);
  };

  return (
    <languageContext.Provider value={{ lang, setLang: changeLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export const useLanguage = () => useContext(languageContext);
