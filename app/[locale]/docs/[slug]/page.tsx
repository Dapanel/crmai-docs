import { RichText } from "@/components/rich-text";
import { DocsPage, DocsBody, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { basehub } from "basehub";
import { Pump } from "basehub/react-pump";
import { parseToc } from "./parse-toc";
import { locales, type Locale } from "@/app/[locale]/layout";

export default async function Page(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await props.params;

  return (
    <Pump
      queries={[
        {
          documentation: {
            // BaseHub production types currently omit the supported variants arg.
            __args: ({
              filter: { _sys_slug: { eq: slug } },
              variants: { languages: locale as Locale },
            } as never),
            item: {
              richText: { json: { content: true, toc: true } },
              _title: true,
            },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const page = documentation.item;
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
      __args: ({
        filter: { _sys_slug: { eq: slug } },
        first: 1,
        variants: { languages: locale as Locale },
      } as never),
      items: { _title: true, category: true },
    },
  });

  const page = documentation.items.at(0);
  if (!page) notFound();

  return {
    title: page._title,
    description: page.category,
  };
}

export async function generateStaticParams() {
  const { documentation } = await basehub().query({
    documentation: {
      items: { _slug: true },
    },
  });

  return locales.flatMap((locale) =>
    documentation.items
      .filter((item) => item._slug !== "index")
      .map((item) => ({ locale, slug: item._slug })),
  );
}
