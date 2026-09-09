import { basehub } from "basehub";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Provider } from "@/app/provider";
import { Toolbar } from "basehub/next-toolbar";

export const locales = ["en", "id", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

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
      _searchKey: true,
    },
  });

  return (
    <Provider _searchKey={documentation._searchKey} locale={locale as Locale}>
      <Toolbar />
      {children}
    </Provider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
