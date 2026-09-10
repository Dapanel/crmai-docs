import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { getBaseOptions } from "@/app/layout.config";
import { Pump } from "basehub/react-pump";
import { renderIcon } from "./render-icon";
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
            pages: {
              __args: { variants: { languages: locale as Locale } } as never,
              items: {
                _slug: true,
                _title: true,
                icon: true,
                order: true,
                isClickable: true,
                category: { _title: true, icon: true, order: true },
                parent: { _slug: true },
              },
            },
            categories: {
              items: {
                _title: true,
                icon: true,
                order: true,
                defaultOpen: true,
              },
            },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const { pages, categories } = documentation;

        type Item = (typeof pages.items)[number];

        function buildPageTree(
          items: Item[],
          parentSlug: string | null,
        ): PageTree.Node[] {
          return items
            .filter((item) => (item.parent?._slug ?? null) === parentSlug)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((item): PageTree.Node => {
              const children = buildPageTree(items, item._slug);
              const icon = renderIcon(item.icon);
              const url =
                item._slug === "index"
                  ? `/${locale}/docs`
                  : `/${locale}/docs/${item._slug}`;

              if (children.length > 0) {
                const node: PageTree.Node = {
                  type: "folder",
                  name: item._title,
                  icon,
                  defaultOpen: false,
                  children,
                };

                if (item.isClickable !== false) {
                  node.index = { type: "page", name: item._title, url };
                }

                return node;
              }

              return { type: "page", name: item._title, icon, url };
            });
        }

        const rootItems = buildPageTree(
          pages.items.filter((item) => !item.category),
          null,
        );

        const categoryNodes: PageTree.Node[] = categories.items
          .slice()
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((cat) => {
            const pagesInCategory = pages.items.filter(
              (item) => item.category?._title === cat._title,
            );

            return {
              type: "folder",
              name: cat._title,
              icon: renderIcon(cat.icon),
              defaultOpen: cat.defaultOpen ?? false,
              children: buildPageTree(pagesInCategory, null),
            } as PageTree.Node;
          });

        const items: PageTree.Node[] = [...rootItems, ...categoryNodes];

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
