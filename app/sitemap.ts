import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/locales";
import { localeAlternates, localizedUrl } from "@/seo";
import { getLocalizedDocumentationPages } from "@/seo-routes";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homePages = locales.map((locale) => ({
    url: localizedUrl(locale),
    alternates: localeAlternates(),
  }));

  const docsIndexPages = locales.map((locale) => ({
    url: localizedUrl(locale, "/docs"),
    alternates: localeAlternates("/docs"),
  }));

  const localizedPages = await getLocalizedDocumentationPages();
  const localesBySlug = new Map<string, Set<Locale>>();

  for (const page of localizedPages) {
    const pageLocales = localesBySlug.get(page.slug) ?? new Set<Locale>();
    pageLocales.add(page.locale);
    localesBySlug.set(page.slug, pageLocales);
  }

  const docsPages = localizedPages.map((page) => {
    const availableLocales = localesBySlug.get(page.slug) ?? new Set([page.locale]);
    const path = `/docs/${page.slug}`;

    return {
      url: localizedUrl(page.locale, path),
      lastModified: new Date(page.lastModifiedAt),
      alternates: localeAlternates(path, [...availableLocales]),
    };
  });

  return [...homePages, ...docsIndexPages, ...docsPages];
}
