"use client";
import { Search } from "@/components/search";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ReactNode, useMemo } from "react";
import type { Locale } from "@/app/[locale]/layout";

export function Provider({
  children,
  _searchKey,
  locale,
  nonClickableSlugs,
}: {
  children: ReactNode;
  _searchKey: string;
  locale: Locale;
  nonClickableSlugs: string[];
}) {
  return (
    <RootProvider
      i18n={{
        locale,
        locales: [
          { locale: "en", name: "English" },
          { locale: "id", name: "Bahasa Indonesia" },
          { locale: "ja", name: "日本語" },
          { locale: "ko", name: "한국어" },
        ],
      }}
      search={useMemo(
        () => ({
          SearchDialog(props) {
            return (
              <Search
                {...props}
                _searchKey={_searchKey}
                locale={locale}
                nonClickableSlugs={nonClickableSlugs}
              />
            );
          },
        }),
        [_searchKey, locale, nonClickableSlugs],
      )}
    >
      {children}
    </RootProvider>
  );
}
