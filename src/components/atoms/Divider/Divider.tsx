import { twJoin, twMerge } from "tailwind-merge";

import { classMerge, makeNum2Unit } from "@utils/utils";

import { DividerPropsType } from "./Divider.types";

/**
 * 영역을 구분하기 위한 구분선을 표시하는 컴포넌트입니다.
 *
 * `div` 태그를 사용하여 구현됩니다.
 */
const Divider = ({
  className,
  length,
  direction = "horizontal",
  thickness = "m",
  color = "outline",
  ...props
}: DividerPropsType) => {
  return (
    <div
      className={twMerge(
        twJoin(
          color === "outline" ? "border-outline" : "border-outline-variant",
          direction === "horizontal" &&
            classMerge(["h-[0rem]", [thickness === "s" ? "border-t-s" : "border-t-m"]]),
          direction === "vertical" &&
            classMerge(["w-[0rem]", [thickness === "s" ? "border-l-s" : "border-l-m"]])
        ),
        className
      )}
      style={
        direction === "horizontal"
          ? { width: makeNum2Unit(length) }
          : { height: makeNum2Unit(length) }
      }
      {...props}
    />
  );
};

export default Divider;
