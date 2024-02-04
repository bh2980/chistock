import useSelectedList from "@hooks/useSelected";

import { ButtonProps, useButton } from "@atoms/Button/Button";

import { TabProps } from "./Tab";

const useTab = (props: TabProps) => {
  const buttonProps = useButton(props as ButtonProps<"button">);

  const { styleVariant, ...selectedProps } = useSelectedList(buttonProps);

  return {
    styleVariant: { ...styleVariant, focusOutlineOffset: false },
    ...selectedProps,
    role: "tab",
  };
};

export default useTab;
