import { basehub } from "basehub";
import { locales, type Locale } from "@/locales";

export type LocalizedDocumentationPage = {
  locale: Locale;
  slug: string;
  lastModifiedAt: string;
};

export async function getLocalizedDocumentationPages() {
  const localizedPages = await Promise.all(
    locales.map(async (locale) => {
      const { documentation } = await basehub().query({
        documentation: {
          pages: {
            __args: { variants: { languages: locale } } as never,
            items: {
              _slug: true,
              _sys: { lastModifiedAt: true },
            },
          },
        },
      });

      return documentation.pages.items
        .filter((page) => page._slug !== "index")
        .map((page) => ({
          locale,
          slug: page._slug,
          lastModifiedAt: page._sys.lastModifiedAt,
        }));
    }),
  );

  return localizedPages.flat();
}
