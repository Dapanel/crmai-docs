import { Pump } from "basehub/react-pump";
import { RichText } from "basehub/react-rich-text";
import type { ReactNode } from "react";
import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { renderIcon } from "./render-icon";
import type { Locale } from "@/app/[locale]/layout";

export default async function Page({
  params,
}: {
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
                order: true,
                icon: true,
                isClickable: true,
                richText: { json: { content: true } },
                category: { _slug: true, _title: true, icon: true },
                parent: { _slug: true },
              },
            },
            categories: {
              __args: { variants: { languages: locale as Locale } } as never,
              items: { _slug: true, _title: true, icon: true, order: true },
            },
          },
        },
      ]}
    >
      {async ([{ documentation }]) => {
        "use server";

        const { pages, categories } = documentation;

        const home = pages.items.find((i) => i._slug === "index");
        if (!home) return null;

        const topLevelItems = pages.items.filter(
          (item) => item._slug !== "index" && !item.parent,
        );

        const sortByOrder = <T extends { order?: number | null }>(list: T[]) =>
          list.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        const uncategorized = sortByOrder(
          topLevelItems.filter((item) => !item.category),
        );

        const groups = sortByOrder(categories.items)
          .map((cat) => ({
            category: cat,
            items: sortByOrder(
              topLevelItems.filter(
                (item) => item.category?._slug === cat._slug,
              ),
            ),
          }))
          .filter((group) => group.items.length > 0);

        const getChildren = (item: (typeof pages.items)[number]) =>
          pages.items
            .filter((child) => child.parent?._slug === item._slug)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        const renderLevel = (items: typeof topLevelItems): ReactNode => {
          const articleItems = items.filter(
            (item) => item.isClickable !== false && getChildren(item).length === 0,
          );
          const groupedItems = items.filter(
            (item) => getChildren(item).length > 0,
          );

          return (
            <>
              {articleItems.length > 0 && (
                <Cards>
                  {articleItems.map((item) => (
                    <Card
                      key={item._slug}
                      href={`/${locale}/docs/${item._slug}`}
                      title={item._title}
                      icon={renderIcon(item.icon)}
                    />
                  ))}
                </Cards>
              )}

              {groupedItems.map((item) => {
                const children = getChildren(item);
                const isClickable = item.isClickable !== false;

                return (
                  <section key={item._slug} className="mt-6">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-fd-foreground">
                      {renderIcon(item.icon)}
                      {isClickable ? (
                        <a
                          href={`/${locale}/docs/${item._slug}`}
                          className="hover:text-fd-primary"
                        >
                          {item._title}
                        </a>
                      ) : (
                        item._title
                      )}
                    </h3>
                    {renderLevel(children)}
                  </section>
                );
              })}
            </>
          );
        };

        return (
          <DocsPage>
            <DocsTitle>Introduction</DocsTitle>
            <DocsBody>
              <RichText content={home.richText?.json.content} />

              {uncategorized.length > 0 && renderLevel(uncategorized)}

              {groups.map(({ category, items }) => (
                <div key={category._title}>
                  <h2 className="mt-8 mb-3 flex items-center gap-2 text-base font-semibold text-fd-foreground">
                    {renderIcon(category.icon)}
                    {category._title}
                  </h2>
                  {renderLevel(items)}
                </div>
              ))}
            </DocsBody>
          </DocsPage>
        );
      }}
    </Pump>
  );
}
