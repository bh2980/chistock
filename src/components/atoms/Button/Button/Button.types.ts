import { VariantProps } from "tailwind-variants";

import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import type { NonNullableProps } from "@customTypes/utilType";

import { buttonVariants } from "./Button.styles";

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
} & (
    | {
        isIconButton?: false;
        label?: string;
      }
    | { isIconButton: true; label: string; icon: React.ReactElement }
  );

/** Button Props 타입 */
export type ButtonProps<
  T extends React.ElementType,
  A extends React.ElementType = T
> = PolymorphicPropsWithInnerRefType<T, ButtonBasePropsType, A>;
