import useSelectedList from "@hooks/useSelected";

import { ButtonProps, useButton } from "@atoms/Button/Button";

import { TabProps } from "./Tab";

const useTab = (props: TabProps) => {
  const buttonProps = useButton(props as ButtonProps<"button">);

  const { styleVariant, onClick, ...selectedProps } = useSelectedList(buttonProps);
  const ariaSelected = selectedProps["aria-selected"];

  const uncancelableOnClick = ariaSelected ? undefined : onClick;

  return {
    styleVariant: { ...styleVariant, focusOutlineOffset: false },
    ...selectedProps,
    onClick: uncancelableOnClick,
    role: "tab",
  };
};

export default useTab;
