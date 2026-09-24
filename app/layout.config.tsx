import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

function Logo() {
  return <Image src="/logos.svg" alt="Logo" width={30} height={30} />;
}

const navigationCopy: Record<string, string> = {
  en: "Visit CRMAI",
  id: "Kunjungi CRMAI",
  ja: "CRMAIを見る",
  ko: "CRMAI 방문",
};

export function getBaseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      url: `/${locale}`,
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
      {
        type: "button",
        text: navigationCopy[locale] ?? navigationCopy.en,
        url: "https://crmai.id",
        external: true,
        secondary: true,
      },
    ],
  };
}
