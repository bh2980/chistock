import type { ListProps } from "./List.types";

export const useListStyle = (props: ListProps) => {
  const { horizontal, className, ...otherProps } = props;

  return { styleVariant: { horizontal, className }, ...otherProps };
};
