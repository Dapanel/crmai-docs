import { RichText } from "@/components/rich-text";
import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsPage, DocsBody, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { basehub } from "basehub";
import { Pump } from "basehub/react-pump";
import { parseToc } from "./parse-toc";
import type { Locale } from "@/locales";
import type { Metadata } from "next";
import {
  descriptionFromRichText,
  localeAlternates,
  localizedUrl,
  siteName,
  titleForLocale,
} from "@/seo";
import { articleSeoCopy } from "@/seo-content";
import { getLocalizedDocumentationPages } from "@/seo-routes";
import { renderIcon } from "../render-icon";

const parentIntro: Record<Locale, string> = {
  en: "Choose a guide below to learn more about",
  id: "Pilih panduan di bawah untuk mempelajari lebih lanjut tentang",
  ja: "詳しく見るには、以下のガイドを選択してください：",
  ko: "자세한 내용은 아래 가이드를 선택하세요:",
};

export default async function Page(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;

  return (
    <Pump
      queries={[
        {
          documentation: {
            pages: {
              __args: {
                variants: { languages: locale as Locale },
              } as never,
              items: {
                _slug: true,
                richText: { json: { content: true, toc: true } },
                _title: true,
                icon: true,
                order: true,
                isClickable: true,
                parent: { _slug: true },
              },
            },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const page = documentation.pages.items.find((item) => item._slug === slug);
        if (!page) notFound();

        const children = documentation.pages.items
          .filter((item) => item.parent?._slug === slug)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        const hasContent = (page.richText?.json.content?.length ?? 0) > 0;
        const isParentOnly = !hasContent && children.length > 0;

        return (
          <DocsPage
            toc={page.richText ? parseToc(page.richText.json.toc[0]) : []}
          >
            {!hasContent && <DocsTitle>{page._title}</DocsTitle>}
            <DocsBody>
              {isParentOnly ? (
                <>
                  <p>
                    {parentIntro[locale as Locale]} {page._title}
                    {locale === "en" || locale === "id" ? "." : ""}
                  </p>
                  <Cards>
                    {children.map((child) => (
                      <Card
                        key={child._slug}
                        href={`/${locale}/docs/${child._slug}`}
                        title={child._title}
                        icon={renderIcon(child.icon)}
                      />
                    ))}
                  </Cards>
                </>
              ) : (
                <RichText content={page.richText?.json.content} />
              )}
            </DocsBody>
          </DocsPage>
        );
      }}
    </Pump>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;
  const curated = articleSeoCopy[slug]?.[locale as Locale];
  const { documentation } = await basehub().query({
    documentation: {
      pages: {
        __args: {
          variants: { languages: locale as Locale },
          filter: { _sys_slug: { eq: slug } },
          first: 1,
        } as never,
        items: {
          _title: true,
          seoTitle: true,
          seoDescription: { plainText: true },
          ...(curated?.description
            ? {}
            : { richText: { json: { content: true } } }),
        },
      },
    },
  });

  const page = documentation.pages.items.at(0);
  if (!page) notFound();

  const title =
    page.seoTitle?.trim() ||
    curated?.title ||
    titleForLocale(page._title, locale as Locale);
  const richTextContent = curated?.description
    ? undefined
    : (
        page as typeof page & {
          richText?: { json?: { content?: unknown } } | null;
        }
      ).richText?.json?.content;
  const description =
    page.seoDescription?.plainText.trim() ||
    curated?.description ||
    descriptionFromRichText(
      richTextContent,
      locale === "id"
        ? `Pelajari ${page._title} di CRMAI.`
        : locale === "ja"
          ? `CRMAIの${page._title}に関する設定と使い方を確認できます。`
          : locale === "ko"
            ? `CRMAI ${page._title} 기능의 설정과 사용 방법을 확인하세요.`
            : `Learn how to use ${page._title} in CRMAI.`,
    );

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(locale as Locale, `/docs/${slug}`),
      ...localeAlternates(`/docs/${slug}`),
    },
    openGraph: {
      type: "article",
      siteName,
      title,
      description,
      url: localizedUrl(locale as Locale, `/docs/${slug}`),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const pages = await getLocalizedDocumentationPages();
  return pages.map(({ locale, slug }) => ({ locale, slug }));
}
