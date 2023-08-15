import { forwardRef } from "react";

import { PolymorphicComponentType, PolymorphicPropsType } from "@customTypes/polymorphicType";

import Button, { ButtonPropsType } from "@atoms/Button/Button";
import Icon from "@atoms/Icon/Icon";
import ICON_MAP from "@constants/iconMap";

type IconButtonPropsType = { icon: keyof typeof ICON_MAP } & ButtonPropsType;

const IconButton: PolymorphicComponentType<"button", IconButtonPropsType> = forwardRef(function IconButton<
  T extends React.ElementType
>({ icon, ...props }: PolymorphicPropsType<T, IconButtonPropsType>) {
  return (
    <Button className="p-s" {...(props as ButtonPropsType)}>
      <Icon icon={icon} />
    </Button>
  );
});

export default IconButton;
