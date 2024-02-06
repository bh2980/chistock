import type { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import { listVariant } from "./List.styles";

export type ListProps = ComponentPropsWithInnerRef<"div"> &
  VariantProps<typeof listVariant> & { rating?: boolean; divider?: React.ReactNode };
