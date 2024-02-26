import { VariantProps } from "tailwind-variants";

import { tv } from "@utils/customTV";

import Button, { type ButtonProps } from "../Button";

export type FloatingButtonProps = Omit<ButtonProps<"button">, "variant" | "rounded"> &
  VariantProps<typeof floatingButtonVariant> & {
    renderAs?: "button";
  };

const floatingButtonVariant = tv({
  base: "absolute shadow-floating z-50",
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
  return (
    <Button
      className={floatingButtonVariant({ variant, className })}
      rounded="circular"
      {...(props as ButtonProps<"button">)}
    />
  );
};

export default FloatingButton;
