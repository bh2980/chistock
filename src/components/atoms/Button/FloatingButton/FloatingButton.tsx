import { PolymorphicPropsType } from "@customTypes/polymorphicType";

import convertSizeProps from "@utils/convertSizeProps";
import { tv } from "@utils/utils";

import Button from "../Button/Button";
import { ButtonBasePropsType } from "../Button/Button.types";

type FloatingButtonProps = Omit<
  PolymorphicPropsType<"button", ButtonBasePropsType & FloatingButtonBaseProps>,
  "variant" | "renderAs"
>;

type FloatingButtonBaseProps = {
  /** 버튼의 배치 방식 */
  position?: "relative" | "absolute" | "fixed" | "sticky";
  /** 부모 컨테이너의 top과의 간격 */
  top?: number | string;
  /** 부모 컨테이너 left과의 간격 */
  left?: number | string;
  /** 부모 컨테이너 bottom과의 간격 */
  bottom?: number | string;
  /** 부모 컨테이너 right과의 간격 */
  right?: number | string;
};

const floatingButtonVariant = tv({
  base: "bg-surface-variant text-surface-on rounded-circle border border-outline-variant overflow-hidden shadow-xl",
});

const FloatingButton = ({ position = "relative", ...props }: FloatingButtonProps) => {
  const convertProps = convertSizeProps(props);

  return (
    <Button
      variant="text"
      className={floatingButtonVariant({ className: `${position}` })}
      {...convertProps}
    />
  );
};

export default FloatingButton;
