import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import type { VariantPropsType } from "@customTypes/utilType";

import { tileVariants } from "./Tile.styles";

/** 기본 Tile 타입 */
export type TileDefault = "div";

/** Tile이 렌더링 될 수 있는 다른 타입 */
export type TileAlterAs = "header" | "footer" | "nav" | "aside" | "main" | "section" | "article";

/**
 * Tile 컴포넌트 기본 Props 타입
 *
 * 태그와 관련 없는 Tile 컴포넌트 고유 속성들
 */
export type TileProps<
  T extends React.ElementType,
  A extends React.ElementType = T
> = PolymorphicPropsWithInnerRefType<T, VariantPropsType<typeof tileVariants>, A>;
