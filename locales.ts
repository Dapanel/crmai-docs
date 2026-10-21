export const locales = ["en", "id", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];
