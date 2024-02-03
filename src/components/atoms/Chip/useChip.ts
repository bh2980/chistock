import { useState } from "react";

import { type ButtonProps, useButton } from "@atoms/Button/Button";

import { ChipProps } from "./Chip.types";

const useChip = ({ selected = false, ...props }: ChipProps) => {
  const [isSelected, setisSelected] = useState(selected);

  const { styleVariant, onClick, ...convertProps } = useButton(props as ButtonProps<"button">);

  const changeChipState = (e: React.MouseEvent<HTMLButtonElement>) => {
    setisSelected((current) => !current);
    const typedOnClick = onClick as React.MouseEventHandler<HTMLButtonElement>;

    if (onClick) typedOnClick(e);
  };

  return {
    styleVariant: { selected: isSelected, ...styleVariant },
    "aria-selected": isSelected,
    onClick: changeChipState,
    ...convertProps,
  };
};

export default useChip;
