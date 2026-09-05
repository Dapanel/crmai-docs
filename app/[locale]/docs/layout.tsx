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
            __args: { variants: { languages: locale as Locale } } as never,
            items: { _slug: true, _title: true, category: true },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const rootItems: PageTree.Node[] = [];
        const groups = new Map<string, PageTree.Node[]>();

        for (const item of documentation.items) {
          const page: PageTree.Node = {
            type: "page",
            name: item._title,
            url:
              item._slug === "index"
                ? `/${locale}/docs`
                : `/${locale}/docs/${item._slug}`,
          };

          if (!item.category || item.category === "Root") {
            rootItems.push(page);
            continue;
          }

          if (!groups.has(item.category)) {
            groups.set(item.category, []);
          }
          groups.get(item.category)!.push(page);
        }

        const items: PageTree.Node[] = [...rootItems];
        for (const [category, pages] of groups) {
          items.push({ type: "separator", name: category });
          items.push(...pages);
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
