"use client";
import { useTranslation } from "@/hooks/useTranslation";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">{t.home.title}</h1>
      <p className="text-lg">{t.home.description}</p>
    </div>
  );
}
