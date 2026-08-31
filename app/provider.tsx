"use client";
import { Search } from "@/components/search";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ReactNode, useMemo } from "react";
import type { Locale } from "@/app/[locale]/layout";

export function Provider({
  children,
  _searchKey,
  locale,
}: {
  children: ReactNode;
  _searchKey: string;
  locale: Locale;
}) {
  return (
    <RootProvider
      search={useMemo(
        () => ({
          SearchDialog(props) {
            return <Search {...props} _searchKey={_searchKey} locale={locale} />;
          },
        }),
        [_searchKey, locale],
      )}
    >
      {children}
    </RootProvider>
  );
}
