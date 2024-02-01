import { tv } from "@utils/utils";

import Button, { type ButtonProps } from "../Button";

export type FloatingButtonProps = ButtonProps<"button"> & {
  variant?: "primary" | "default";
  renderAs?: "button";
};

const floatingButtonVariant = tv({
  base: "absolute rounded-circle shadow-xl",
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      default: "bg-surface-variant text-surface-on",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const FloatingButton = ({ variant, className, ...props }: FloatingButtonProps) => {
  return <Button className={floatingButtonVariant({ variant, className })} {...props} />;
};

export default FloatingButton;
