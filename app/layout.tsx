import "./global.css";
import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toolbar } from "basehub/next-toolbar";
import { ThemeScript } from "@/components/theme-script";

export const metadata: Metadata = {
  title: {
    default: "CRMAI Docs",
    template: "%s | CRMAI Docs",
  },
  description: "Dokumentasi resmi CRMAI.",
  applicationName: "CRMAI Docs",
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
      </body>
    </html>
  );
}
