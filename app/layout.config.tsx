import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

function Logo() {
  return <Image src="/logos.svg" alt="Logo" width={30} height={30} />;
}

export function getBaseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
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
