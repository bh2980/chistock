import { VariantProps } from "tailwind-variants";

import { NonNullableProps } from "@customTypes/utilType";

import { buttonVariants } from "./Button";

/** Button 컴포넌트 기본 타입 */
export type ButtonDefault = "button";

/** Button 컴포넌트가 렌더링될 수 있는 다른 타입 */
export type ButtonAlterAs = "a";

export type ButtonBasePropsType = NonNullableProps<VariantProps<typeof buttonVariants>> & {
  /** 버튼 비활성화 여부
   * @default false
   */
  disabled?: boolean;
  /** 렌더링할 Icon 컴포넌트
   *
   * @type Icon
   */
  icon?: React.ReactElement;
  /** 버튼 내 아이콘 위치
   * @default before
   */
  iconPosition?: "before" | "after";
};

export type IconWrapperPropsType = React.PropsWithChildren & {
  isIconButton?: boolean;
  iconPosition?: "before" | "after";
};
