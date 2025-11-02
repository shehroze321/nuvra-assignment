"use client";
import { useTranslation } from "@/hooks/useTranslation";
export default function About() {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">{t.about.title}</h1>
      <p className="text-lg">{t.about.description}</p>
    </div>
  );
}
