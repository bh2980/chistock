import type { DividerProps } from "./Divider.types";

const useDividerStyle = (props: DividerProps) => {
  const { className, vertical, color, children, ...otherProps } = props;

  return {
    styleVariant: {
      className,
      vertical,
      color,
      hasContent: children ? true : false,
    },
    children,
    ...otherProps,
  };
};

const useDivider = (props: DividerProps) => {
  const { styleVariant, ...otherProps } = useDividerStyle(props);

  const { vertical } = styleVariant;

  return {
    role: "separator",
    "aria-orientation": vertical ? ("vertical" as const) : ("horizontal" as const),
    styleVariant,
    ...otherProps,
  };
};

export default useDivider;
