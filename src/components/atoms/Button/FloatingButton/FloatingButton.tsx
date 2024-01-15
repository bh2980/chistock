import { PolymorphicPropsType } from "@customTypes/polymorphicType";

import { makeNum2Unit } from "@utils/utils";

import Tile from "@atoms/Tile/Tile";

import Button from "../Button/Button";
import { ButtonBasePropsType } from "../Button/Button.types";

type FloatingButtonProps = Omit<
  PolymorphicPropsType<"button", ButtonBasePropsType & FloatingButtonBaseProps>,
  "variant" | "renderAs"
>;

type FloatingButtonBaseProps = {
  /** 버튼의 배치 방식 */
  position?: "static" | "absolute" | "fixed";
  /** `absolute, fixed`를 사용할 경우 top과의 간격 */
  top?: number;
  /** `absolute, fixed`를 사용할 경우 left과의 간격 */
  left?: number;
  /** `absolute, fixed`를 사용할 경우 bottom과의 간격 */
  bottom?: number;
  /** `absolute, fixed`를 사용할 경우 right과의 간격 */
  right?: number;
};

const FloatingButton = ({
  position = "static",
  top,
  left,
  bottom,
  right,
  ...props
}: FloatingButtonProps) => {
  return (
    <Tile
      renderAs="div"
      shadow="xl"
      className="w-fit h-fit rounded-circle flex justify-center items-center overflow-hidden"
      style={{
        position,
        // TODO %나 string 형태 대응
        top: makeNum2Unit(top),
        bottom: makeNum2Unit(bottom),
        left: makeNum2Unit(left),
        right: makeNum2Unit(right),
      }}
    >
      <Button renderAs={"button"} variant="text" className="w-full h-full" {...props} />
    </Tile>
  );
};

export default FloatingButton;
