import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

/**
 * 무엇이든 될 수 있는 기본 다형성 컴포넌트입니다.
 *
 * T를 통해 컴포넌트의 타입을 지정할 수 있습니다.
 */
const Box = <T extends React.ElementType = "div">({
  renderAs,
  innerRef,
  ...props
}: PolymorphicPropsWithInnerRefType<T>) => {
  const Root = renderAs || "div";

  return <Root ref={innerRef} {...props}></Root>;
};

export default Box;
