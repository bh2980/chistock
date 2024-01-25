import { PolymorphicPropsType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import Button from "../Button/Button";
import { ButtonBasePropsType } from "../Button/Button.types";

type FloatingButtonProps = PolymorphicPropsType<"button", ButtonBasePropsType> & {
  variant?: "primary" | "text";
  renderAs?: "button";
};

const floatingButtonVariant = tv({
  base: "absolute rounded-circle border border-outline-variant overflow-hidden shadow-xl",
});

const FloatingButton = ({ className, variant = "text", ...props }: FloatingButtonProps) => {
  return <Button variant={variant} className={floatingButtonVariant({ className })} {...props} />;
};

export default FloatingButton;
