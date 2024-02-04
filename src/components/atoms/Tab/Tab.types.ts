import type { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import { tabVariant } from "./Tab.styles";

export type TabProps = ComponentPropsWithInnerRef<"button"> &
  VariantProps<typeof tabVariant> & { value: string };

export type TabListProps = ComponentPropsWithInnerRef<"div"> & {
  defaultSelected: string;
};
