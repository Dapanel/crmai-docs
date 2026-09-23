import { RichText } from "@/components/rich-text";
import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsPage, DocsBody, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { basehub } from "basehub";
import { Pump } from "basehub/react-pump";
import { parseToc } from "./parse-toc";
import { locales, type Locale } from "@/app/[locale]/layout";
import type { Metadata } from "next";
import {
  descriptionFromRichText,
  localeAlternates,
  localizedUrl,
} from "@/seo";
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
            <DocsTitle>{page._title}</DocsTitle>
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
          category: { _title: true },
          richText: { json: { content: true } },
        },
      },
    },
  });

  const page = documentation.pages.items.at(0);
  if (!page) notFound();

  return {
    title: page._title,
    description: descriptionFromRichText(
      page.richText?.json.content,
      page.category?._title
        ? `${page._title} — ${page.category._title}`
        : `Pelajari ${page._title} di CRMAI Docs.`,
    ),
    alternates: {
      canonical: localizedUrl(locale as Locale, `/docs/${slug}`),
      ...localeAlternates(`/docs/${slug}`),
    },
    openGraph: {
      type: "article",
      title: page._title,
      description: descriptionFromRichText(
        page.richText?.json.content,
        `Pelajari ${page._title} di CRMAI Docs.`,
      ),
      url: localizedUrl(locale as Locale, `/docs/${slug}`),
    },
  };
}

export async function generateStaticParams() {
  const { documentation } = await basehub().query({
    documentation: {
      pages: {
        items: { _slug: true },
      },
    },
  });

  return locales.flatMap((locale) =>
    documentation.pages.items
      .filter((item) => item._slug !== "index")
      .map((item) => ({ locale, slug: item._slug })),
  );
}
