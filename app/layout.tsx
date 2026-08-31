import "./global.css";
import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Toolbar } from "basehub/next-toolbar";

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
    <html lang={locale ?? "en"} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {children}
        <Toolbar />
      </body>
    </html>
  );
}
