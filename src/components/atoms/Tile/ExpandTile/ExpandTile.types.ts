import { VariantProps } from "tailwind-variants";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { expandTileVariants } from "./ExpandTile.styles";

export type ExpandTileBaseProps = {
  closeText?: string;
  expandText?: string;
  hideWithGradient?: boolean;
  expanded?: boolean;
};

export type ExpandTileProps<
  T extends React.ElementType,
  A extends React.ElementType = T
> = PolymorphicPropsWithInnerRefType<T, ExpandTileBaseProps, A> &
  VariantProps<typeof expandTileVariants>;
