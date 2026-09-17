import "./global.css";
import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toolbar } from "basehub/next-toolbar";
import { ThemeScript } from "@/components/theme-script";
import { siteName, siteUrl } from "@/seo";

export const metadata: Metadata = {
  title: {
    default: "CRMAI Docs",
    template: "%s | CRMAI Docs",
  },
  description: "Dokumentasi resmi CRMAI.",
  metadataBase: new URL(siteUrl),
  applicationName: "CRMAI Docs",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: "Dokumentasi resmi CRMAI.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: "Dokumentasi resmi CRMAI.",
  },
  icons: {
    icon: "/logos.svg",
    shortcut: "/logos.svg",
    apple: "/logos.svg",
  },
};

const inter = Geist_Mono({
  subsets: ["latin"],
});

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale ?? "en"}
      className={inter.className}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
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
