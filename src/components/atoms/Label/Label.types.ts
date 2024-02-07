import { ComponentPropsWithoutRef } from "react";
import { VariantProps } from "tailwind-variants";

import { InnerRefType } from "@customTypes/polymorphicType";

import { labelVariants } from "./Label.styles";

export type LabelProps = ComponentPropsWithoutRef<"span"> &
  InnerRefType<"span"> &
  VariantProps<typeof labelVariants>;
