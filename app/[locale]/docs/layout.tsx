import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { getBaseOptions } from "@/app/layout.config";
import { Pump } from "basehub/react-pump";
import { Icon } from "basehub/react-icon";
import type * as PageTree from "fumadocs-core/page-tree";
// import type { Locale } from "@/app/[locale]/layout";

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
            items: {
              _slug: true,
              _title: true,
              icon: true,
              order: true,
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
      ]}
    >
      {async ([{ documentation, categories }]) => {
        "use server";

        type Item = (typeof documentation.items)[number];

        function renderIcon(content?: string | null) {
          return content ? <Icon content={content} /> : undefined;
        }

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
                return {
                  type: "folder",
                  name: item._title,
                  icon,
                  defaultOpen: false,
                  index: { type: "page", name: item._title, url },
                  children,
                };
              }

              return { type: "page", name: item._title, icon, url };
            });
        }

        // Item tanpa category (root-level, misal "Home")
        const rootItems = buildPageTree(
          documentation.items.filter((item) => !item.category),
          null,
        );

        // Bangun folder per kategori, urut sesuai field order di Categories
        const categoryNodes: PageTree.Node[] = categories.items
          .slice()
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((cat) => {
            const pagesInCategory = documentation.items.filter(
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
