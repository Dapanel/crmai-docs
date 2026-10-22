import { Icon } from "basehub/react-icon";
import type { ReactNode } from "react";

export function renderIcon(content?: string | null): ReactNode | undefined {
  return content ? <Icon content={content} /> : undefined;
}
