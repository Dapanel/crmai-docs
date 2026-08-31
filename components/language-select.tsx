"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/app/[locale]/layout";

const languages: Array<{ value: Locale; label: string }> = [
  { value: "en", label: "English" },
  { value: "id", label: "Bahasa Indonesia" },
  { value: "ja", label: "日本語" },
  { value: "ko", label: "한국어" },
];

export function LanguageSelect({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(locale: Locale) {
    const [, , ...rest] = pathname.split("/");
    router.push(`/${locale}/${rest.join("/")}`);
  }

  return (
    <select
      aria-label="Language"
      value={currentLocale}
      onChange={(event) => handleChange(event.target.value as Locale)}
      className="rounded-md border bg-fd-background px-2 py-1 text-sm"
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
