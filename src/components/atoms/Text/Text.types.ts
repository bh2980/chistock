import { VariantProps } from "tailwind-variants";

import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import type { NonNullableProps } from "@customTypes/utilType";

import { textColorVariants, textVariants } from "@atoms/Text/Text.styles";

/** 기본 Text 컴포넌트 타입 */
export type TextDefault = "span";

/**
 * Text 컴포넌트가 렌더링 될 수 있는 타입
 *
 * 필요 시 추가 후 사용
 */
export type TextAlterAs = "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Text 컴포넌트 기본 Props 타입
 *
 * 태그와 관련 없는 Text 컴포넌트가 가지는 고유 속성들
 */
export type TextBasePropsType = NonNullableProps<
  VariantProps<typeof textColorVariants> & VariantProps<typeof textVariants>
> & {
  /** 텍스트 굵기 여부
   * @default false
   */
  bold?: boolean;
};

export type TextProps<
  T extends React.ElementType,
  A extends React.ElementType = T
> = PolymorphicPropsWithInnerRefType<T, TextBasePropsType, A>;
