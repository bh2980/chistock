import { VariantProps } from "tailwind-variants";

import { tv } from "@utils/utils";

import Button, { type ButtonProps } from "../Button";

export type FloatingButtonProps = ButtonProps<"button"> &
  VariantProps<typeof floatingButtonVariant> & {
    renderAs?: "button";
  };

const floatingButtonVariant = tv({
  base: "absolute rounded-circle shadow-floating",
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      primaryContainer: "bg-primary-container text-primary-container-on",
      secondary: "bg-secondary text-secondary-on",
      secondaryContainer: "bg-secondary-container text-secondary-container-on",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const FloatingButton = ({ variant, className, ...props }: FloatingButtonProps) => {
  return <Button className={floatingButtonVariant({ variant, className })} {...props} />;
};

export default FloatingButton;
