import { basehub } from "basehub";
import type { MetadataRoute } from "next";
import { locales } from "@/app/[locale]/layout";
import { localizedUrl } from "@/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { documentation } = await basehub().query({
    documentation: {
      pages: {
        __args: { variants: { languages: "en" } } as never,
        items: {
          _slug: true,
          _sys: { lastModifiedAt: true },
        },
      },
    },
  });

  const homePages = locales.map((locale) => ({
    url: localizedUrl(locale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((alternate) => [alternate, localizedUrl(alternate)]),
      ),
    },
  }));

  const docsPages = documentation.pages.items
    .filter((page) => page._slug !== "index")
    .flatMap((page) =>
      locales.map((locale) => ({
        url: localizedUrl(locale, `/docs/${page._slug}`),
        lastModified: new Date(page._sys.lastModifiedAt),
        alternates: {
          languages: Object.fromEntries(
            locales.map((alternate) => [
              alternate,
              localizedUrl(alternate, `/docs/${page._slug}`),
            ]),
          ),
        },
      })),
    );

  return [...homePages, ...docsPages];
}