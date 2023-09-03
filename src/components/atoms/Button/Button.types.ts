import { VariantProps } from "class-variance-authority";
import Link from "next/link";

import { NonNullableProps } from "@customTypes/utilType";

import { buttonVariants } from "./Button";

export type DefaultType = "button";
export type AlternateAs = "a" | typeof Link;

export type ButtonBaseType = NonNullableProps<VariantProps<typeof buttonVariants>> & {
  /** disabled props 설명
   * @default false
   */
  disabled?: boolean;
  /** Icon 컴포넌트 타입 */
  icon?: React.ReactElement;
  /** 아이콘 위치 */
  iconPosition?: "before" | "after";
};

export type IconWrapperPropsType = React.PropsWithChildren & {
  isIconButton?: boolean;
  iconPosition?: "before" | "after";
};
