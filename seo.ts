import type { Locale } from "@/app/[locale]/layout";

export const siteUrl = "https://docs.crmai.id";
export const siteName = "CRMAI Docs";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  ja: "日本語",
  ko: "한국어",
};

export function localizedUrl(locale: Locale, path = "") {
  return `${siteUrl}/${locale}${path}`;
}

export function localeAlternates(path = "") {
  return {
    languages: {
      en: localizedUrl("en", path),
      id: localizedUrl("id", path),
      ja: localizedUrl("ja", path),
      ko: localizedUrl("ko", path),
      "x-default": localizedUrl("en", path),
    },
  };
}

export function extractText(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(extractText).join(" ");
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.text === "string") return record.text;

    return Object.entries(record)
      .filter(([key]) => ["children", "content", "value", "alt"].includes(key))
      .map(([, item]) => extractText(item))
      .filter(Boolean)
      .join(" ");
  }
  return "";
}

export function descriptionFromRichText(value: unknown, fallback: string) {
  const text = extractText(value)
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return fallback;
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}...` : text;
}