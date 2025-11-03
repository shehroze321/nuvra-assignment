"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { useTranslation } from "@/hooks/useTranslation";

export default function Header() {
  const { t } = useTranslation();
  const { lang, setLang } = useLanguage();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <nav className="flex gap-4">
        <Link href="/home" className="text-blue-600 hover:underline">
          {t.header.home}
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          {t.header.about}
        </Link>
      </nav>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setLang("en");
            window.location.reload();
          }}
          className={`px-3 py-1 rounded ${
            lang === "en"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 cursor-pointer"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => {
            setLang("ro");
            window.location.reload();
          }}
          className={`px-3 py-1 rounded ${
            lang === "ro"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 cursor-pointer"
          }`}
        >
          RO
        </button>
      </div>
    </header>
  );
}
