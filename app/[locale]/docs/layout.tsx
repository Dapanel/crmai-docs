import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { getBaseOptions } from "@/app/layout.config";
import { Pump } from "basehub/react-pump";
import type * as PageTree from "fumadocs-core/page-tree";
import type { Locale } from "@/app/[locale]/layout";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <Pump
      queries={[
        {
          documentation: {
            items: { _slug: true, _title: true, category: { _title: true } },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const items: PageTree.Node[] = [];

        for (const item of documentation.items) {
          let idx = items.length;
          const categoryTitle = item.category?._title;

          if (categoryTitle && categoryTitle !== "Root") {
            idx = items.findIndex((parent) => parent.name === categoryTitle);

            if (idx === -1) {
              items.push({ type: "separator", name: categoryTitle });
              idx = items.length;
            }
          }

          items.splice(idx, 0, {
            type: "page",
            name: item._title,
            url:
              item._slug === "index"
                ? `/${locale}/docs`
                : `/${locale}/docs/${item._slug}`,
          });
        }

        return (
          <DocsLayout
            tree={{ name: "Docs", children: items }}
            {...getBaseOptions(locale)}
          >
            {children}
          </DocsLayout>
        );
      }}
    </Pump>
  );
}
