import Link from "fumadocs-core/link";
import type { Metadata } from "next";
import { localeAlternates, localizedUrl, siteName } from "@/seo";
import type { Locale } from "@/app/[locale]/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: siteName,
    description:
      "Dokumentasi resmi CRMAI untuk membantu tim menggunakan platform CRM berbasis WhatsApp.",
    alternates: {
      canonical: localizedUrl(locale as Locale),
      ...localeAlternates(),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to CRMAI Docs</h1>
      <p className="text-fd-muted-foreground">
        Find thing could be usefull for you.
      </p>
      <div className="flex flex-row items-center justify-center mt-4 gap-4">
        <Link
          href={`/${locale}/docs`}
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          docs
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=628113111882"
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          Whatsapp
        </Link>
      </div>
    </main>
  );
}
