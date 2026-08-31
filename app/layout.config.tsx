import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { LanguageSelect } from "@/components/language-select";

function Logo() {
  return <Image src="/logos.svg" alt="Logo" width={30} height={30} />;
}

export function getBaseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
    children: <LanguageSelect currentLocale={locale as "en" | "id" | "ja" | "ko"} />,
    title: (
        <>
          <Logo />
          CRMAI Docs
        </>
      ),
    },
    links: [
      {
        text: "Documentation",
        url: `/${locale}/docs`,
        active: "nested-url",
      },
    ],
  };
}
