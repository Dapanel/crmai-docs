import { basehub } from "basehub";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Provider } from "@/app/provider";
import { Toolbar } from "basehub/next-toolbar";
import { locales, type Locale } from "@/locales";

export { locales, type Locale };

export const revalidate = 3600;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const { documentation } = await basehub().query({
    documentation: {
      pages: {
        __args: { variants: { languages: locale as Locale } } as never,
        _searchKey: true,
        items: { _slug: true, isClickable: true },
      },
    },
  });

  return (
    <Provider
      _searchKey={documentation.pages._searchKey}
      locale={locale as Locale}
      nonClickableSlugs={documentation.pages.items
        .filter((page) => page.isClickable === false)
        .map((page) => page._slug)}
    >
      <Toolbar />
      {children}
    </Provider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
