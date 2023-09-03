import { PolymorphicPropsType } from "@customTypes/polymorphicType";

/** Box를 반환하는 함수입니다.
 *
 * T를 제공해 특정 타입의 박스를 반환하게 할 수 있습니다.
 */
export const createBox = <T extends React.ElementType>() => Box<T>;

/**
 * 무엇이든 될 수 있는 기본 다형성 컴포넌트입니다.
 *
 * T를 통해 컴포넌트의 타입을 지정할 수 있습니다.
 */
const Box = <T extends React.ElementType = "div">({
  renderAs,
  ...props
}: PolymorphicPropsType<T>) => {
  const Root = renderAs || "div";

  return <Root {...props}></Root>;
};

export default Box;
