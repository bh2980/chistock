import { tv } from "@utils/utils";

import Box from "@atoms/Box/Box";

import { DividerPropsType } from "./Divider.types";

const dividerVariants = tv({
  variants: {
    color: {
      outline: "border-outline",
      outlineVariant: "border-outline-variant",
    },
    direction: {
      horizontal: "",
      vertical: "",
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
  length = "100%",
  direction = "horizontal",
  thickness,
  color,
  ...props
}: DividerPropsType) => {
  return (
    <Box
      width={direction === "horizontal" ? length : undefined}
      height={direction === "vertical" ? length : undefined}
      className={dividerVariants({ color, thickness, direction, className })}
      {...props}
    />
  );
};

export default Divider;
