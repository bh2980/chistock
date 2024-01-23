import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import type { VariantPropsType } from "@customTypes/utilType";

import { flexAlignVariants } from "@constants/flexAlign";

import { tv } from "@utils/utils";

import Box from "@atoms/Box/Box";

// stack 고유 props
type StackBasePropsType = VariantPropsType<typeof stackVariants> &
  VariantPropsType<typeof flexAlignVariants>;

/** 기본 Stack 타입 */
export type StackDefault = "div";

/** Stack이 렌더링 될 수 있는 다른 타입 */
export type StackAlterAs = "main" | "section" | "article";

const stackVariants = tv({
  extend: flexAlignVariants,
  variants: {
    /** stack의 방향
     * @default column
     */
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
    },
  },
  defaultVariants: {
    direction: "column",
  },
});

const Stack = <
  T extends StackDefault | StackAlterAs = StackDefault,
  A extends StackAlterAs = StackAlterAs
>({
  children,
  className,
  direction,
  gap,
  justifyContent,
  itemAligns,
  ...props
}: PolymorphicPropsWithInnerRefType<T, StackBasePropsType, A>) => {
  return (
    <Box<StackDefault | StackAlterAs>
      className={stackVariants({ direction, justifyContent, itemAligns, gap, className })}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Stack;
