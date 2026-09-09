import { Pump } from "basehub/react-pump";
import { RichText } from "basehub/react-rich-text";
import { Card, Cards } from "fumadocs-ui/components/card";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { renderIcon } from "./icon";

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
            items: {
              _slug: true,
              _title: true,
              order: true,
              icon: true,
              richText: { json: { content: true } },
              category: { _title: true, icon: true },
              parent: { _slug: true },
            },
          },
          categories: {
            items: { _title: true, icon: true, order: true },
          },
        },
      ]}
    >
      {async ([{ documentation, categories }]) => {
        "use server";

        const home = documentation.items.find((i) => i._slug === "index");
        if (!home) return null;

        const topLevelItems = documentation.items.filter(
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
                (item) => item.category?._title === cat._title,
              ),
            ),
          }))
          .filter((group) => group.items.length > 0);

        const renderCards = (items: typeof topLevelItems) => (
          <Cards>
            {items.map((item) => (
              <Card
                key={item._slug}
                href={`/${locale}/docs/${item._slug}`}
                title={item._title}
                icon={renderIcon(item.icon)}
              />
            ))}
          </Cards>
        );

        return (
          <DocsPage>
            <DocsTitle>Introduction</DocsTitle>
            <DocsBody className="text-sm">
              <RichText content={home.richText?.json.content} />

              {uncategorized.length > 0 && renderCards(uncategorized)}

              {groups.map(({ category, items }) => (
                <div key={category._title}>
                  <h2 className="mt-8 mb-3 flex items-center gap-2 text-base font-semibold text-fd-foreground">
                    {renderIcon(category.icon)}
                    {category._title}
                  </h2>
                  {renderCards(items)}
                </div>
              ))}
            </DocsBody>
          </DocsPage>
        );
      }}
    </Pump>
  );
}
