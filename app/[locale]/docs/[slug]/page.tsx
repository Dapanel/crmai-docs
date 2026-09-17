import { RichText } from "@/components/rich-text";
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
                filter: { _sys_slug: { eq: slug } },
                first: 1,
              } as never,
              items: {
                richText: { json: { content: true, toc: true } },
                _title: true,
              },
            },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const page = documentation.pages.items.at(0);
        if (!page) notFound();

        return (
          <DocsPage
            toc={page.richText ? parseToc(page.richText.json.toc[0]) : []}
          >
            <DocsTitle>{page._title}</DocsTitle>
            <DocsBody className="text-sm">
              <RichText content={page.richText?.json.content} />
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
