import type { VariantProps } from "tailwind-variants";

import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import { tabVariant } from "./Tab.styles";

export type TabProps = ComponentPropsWithInnerRef<"button"> &
  VariantProps<typeof tabVariant> & { value: string };

export type TabListProps = ComponentPropsWithInnerRef<"div"> & {
  defaultSelected: string;
};

// TODO 추후 제너릭으로 추상화하기
export type useTabReturnType = ComponentPropsWithInnerRef<"button"> & {
  styleVariant: VariantProps<typeof tabVariant>;
};

export type useTabListReturnType = ComponentPropsWithInnerRef<"div"> & TabListProps;
