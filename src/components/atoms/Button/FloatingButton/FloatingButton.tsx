import { PolymorphicPropsType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import Button from "../Button/Button";
import { ButtonBasePropsType } from "../Button/Button.types";

type FloatingButtonProps = Omit<
  PolymorphicPropsType<"button", ButtonBasePropsType>,
  "variant" | "renderAs"
>;

const floatingButtonVariant = tv({
  base: "absolute bg-surface-variant text-surface-on rounded-circle border border-outline-variant overflow-hidden shadow-xl",
});

const FloatingButton = ({ className, ...props }: FloatingButtonProps) => {
  return <Button variant="text" className={floatingButtonVariant({ className })} {...props} />;
};

export default FloatingButton;
