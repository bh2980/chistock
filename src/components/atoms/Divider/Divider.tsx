import { makeNum2Unit, tv } from "@utils/utils";

import { DividerPropsType } from "./Divider.types";

const dividerVariants = tv({
  variants: {
    color: {
      outline: "border-outline",
      outlineVariant: "border-outline-variant",
    },
    direction: {
      horizontal: "h-[0rem]",
      vertical: "w-[0rem]",
    },
    thickness: {
      s: "",
      m: "",
    },
  },
  compoundVariants: [
    {
      direction: "horizontal",
      thickness: "s",
      className: "border-t-s",
    },
    {
      direction: "horizontal",
      thickness: "m",
      className: "border-t-m",
    },
    {
      direction: "vertical",
      thickness: "s",
      className: "border-l-s",
    },
    {
      direction: "vertical",
      thickness: "m",
      className: "border-l-m",
    },
  ],
  defaultVariants: {
    color: "outline",
    direction: "horizontal",
    thickness: "m",
  },
});

/**
 * 영역을 구분하기 위한 구분선을 표시하는 컴포넌트입니다.
 *
 * `div` 태그를 사용하여 구현됩니다.
 */
const Divider = ({
  className,
  length,
  direction,
  thickness,
  color,
  ...props
}: DividerPropsType) => {
  return (
    <div
      className={dividerVariants({ color, thickness, direction, className })}
      style={
        direction === "horizontal" || direction === undefined
          ? { width: makeNum2Unit(length) }
          : { height: makeNum2Unit(length) }
      }
      {...props}
    />
  );
};

export default Divider;
