import { tv } from "@utils/utils";

import Button, { type ButtonProps } from "../Button";

export type FloatingButtonProps = ButtonProps<"button"> & {
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
