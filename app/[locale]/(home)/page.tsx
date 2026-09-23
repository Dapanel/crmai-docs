import Link from "fumadocs-core/link";
import type { Metadata } from "next";
import { localeAlternates, localizedUrl, siteName } from "@/seo";
import type { Locale } from "@/app/[locale]/layout";

const homeCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    browseDocs: string;
    contactSupport: string;
  }
> = {
  en: {
    title: "CRMAI Documentation",
    description:
      "Learn how to set up your workspace, manage conversations, and use CRMAI features.",
    browseDocs: "Browse documentation",
    contactSupport: "Contact support on WhatsApp",
  },
  id: {
    title: "Dokumentasi CRMAI",
    description:
      "Pelajari cara menyiapkan workspace, mengelola percakapan, dan menggunakan fitur CRMAI.",
    browseDocs: "Lihat dokumentasi",
    contactSupport: "Hubungi dukungan lewat WhatsApp",
  },
  ja: {
    title: "CRMAI ドキュメント",
    description:
      "ワークスペースの設定、会話の管理、CRMAIの機能の使い方を確認できます。",
    browseDocs: "ドキュメントを見る",
    contactSupport: "WhatsAppでサポートに連絡",
  },
  ko: {
    title: "CRMAI 문서",
    description:
      "워크스페이스 설정, 대화 관리, CRMAI 기능 사용 방법을 확인하세요.",
    browseDocs: "문서 보기",
    contactSupport: "WhatsApp으로 지원팀에 문의",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = homeCopy[locale as Locale];
  return {
    title: siteName,
    description: copy.description,
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
  const copy = homeCopy[locale as Locale];

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{copy.title}</h1>
      <p className="mx-auto max-w-xl text-fd-muted-foreground">
        {copy.description}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href={`/${locale}/docs`}
          className="text-fd-foreground hover:text-fd-primary font-medium underline underline-offset-4"
        >
          {copy.browseDocs}
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=628113111882"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fd-foreground hover:text-fd-primary font-medium underline underline-offset-4"
        >
          {copy.contactSupport}
        </Link>
      </div>
    </main>
  );
}
