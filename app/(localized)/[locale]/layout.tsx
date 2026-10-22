import "../../global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { basehub } from "basehub";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Provider } from "@/app/provider";
import { Toolbar } from "basehub/next-toolbar";
import { ThemeScript } from "@/components/theme-script";
import { homeSeoCopy } from "@/seo-content";
import { localizedUrl, siteName, siteUrl } from "@/seo";
import { locales, type Locale } from "@/locales";

export { locales, type Locale };

export const revalidate = 3600;

const applicationNameByLocale: Record<Locale, string> = {
  en: "CRMAI Docs",
  id: "Dokumentasi CRMAI",
  ja: "CRMAIヘルプセンター",
  ko: "CRMAI 도움말 센터",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : "en";
  const { title, description } = homeSeoCopy[locale];
  const url = localizedUrl(locale);

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    applicationName: applicationNameByLocale[locale],
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    icons: {
      icon: "/logos.svg",
      shortcut: "/logos.svg",
      apple: "/logos.svg",
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const activeLocale = locale as Locale;

  const { documentation } = await basehub().query({
    documentation: {
      pages: {
        __args: { variants: { languages: activeLocale } } as never,
        _searchKey: true,
        items: { _slug: true, isClickable: true },
      },
    },
  });

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider
          _searchKey={documentation.pages._searchKey}
          locale={activeLocale}
          nonClickableSlugs={documentation.pages.items
            .filter((page) => page.isClickable === false)
            .map((page) => page._slug)}
        >
          {children}
        </Provider>
        <Toolbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CRMAI",
                url: "https://crmai.id",
                logo: "https://docs.crmai.id/logos.svg",
                sameAs: ["https://crmai.id"],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteName,
                url: siteUrl,
                publisher: { "@type": "Organization", name: "CRMAI" },
                inLanguage: ["en", "id", "ja", "ko"],
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "CRMAI",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                url: "https://crmai.id",
                documentation: siteUrl,
                publisher: { "@type": "Organization", name: "CRMAI" },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
