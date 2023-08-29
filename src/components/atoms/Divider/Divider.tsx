import { ComponentProps } from "react";
import { twJoin, twMerge } from "tailwind-merge";

type DividerPropsType = {
  color: "outline" | "outlineVariant";
  direction: "horizontal" | "vertical";
  thickness: "s" | "m";
} & ComponentProps<"div">;

const Divider = ({ className, direction, thickness, color }: DividerPropsType) => {
  return (
    <div
      className={twMerge(
        className,
        twJoin(
          color === "outline" ? "border-outline" : "border-outline-variant",
          direction === "horizontal" && [thickness === "s" ? "border-t-s" : "border-t-m"],
          direction === "vertical" && [thickness === "s" ? "border-l-s" : "border-l-m"]
        )
      )}
    />
  );
};

export default Divider;
