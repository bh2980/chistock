import { VariantProps } from "class-variance-authority";
import Link from "next/link";

import { NonNullableProps } from "@customTypes/utilType";

import { buttonVariants } from "./Button";

/** Button 컴포넌트 기본 타입 */
export type ButtonDefault = "button";

/** Button 컴포넌트가 렌더링될 수 있는 다른 타입 */
export type ButtonAlterAs = "a" | typeof Link;

export type ButtonBasePropsType = NonNullableProps<VariantProps<typeof buttonVariants>> & {
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
