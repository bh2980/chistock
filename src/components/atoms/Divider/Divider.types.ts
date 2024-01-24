/** Divider이 가지는 공통 속성 타입*/
type DividerBaseType = {
  /** Divider의 방향을 결정하는 속성
   *
   * @default 'horizontal'
   */
  direction?: "horizontal" | "vertical";
  /**
   * Divider의 색상을 결정하는 속성
   *  @default 'outline'
   */
  color?: "outline" | "outlineVariant";
  /**
   * Divider의 굵기를 결정하는 속성
   * @default 'm'
   */
  thickness?: "s" | "m";
};

/**
 * Divider에 들어가는 Props 타입
 *
 * direction에 따라서 HorizontalDividerType 혹은 VerticalDividerType이 포함됩니다.
 *
 * @example
 * direction = 'horizontal' : HorizontalDividerType & DividerBaseType & divProps
 * direction = 'vertical' : VerticalDividerType & DividerBaseType & divProps
 *  */
export type DividerPropsType = DividerBaseType & React.ComponentProps<"div">;
