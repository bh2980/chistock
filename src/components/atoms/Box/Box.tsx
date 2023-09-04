import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

/** renderAs의 기본값이 지정된 Box를 반환하는 함수입니다.
 *
 * renderAs의 종류를 제한할 때에는 가능한 타입을 Union으로 결합하여 제네릭으로 넣어주세요.
 *
 * @param `defaultAs` : 기본적으로 렌더링 될 태그 혹은 컴포넌트 타입
 *
 * @example
 * // 기본적으로 `button`태그로 렌더링되면서
 * //`button`, `a` 태그만 렌더링로만 가능한 Box 컴포넌트
 * createBox<'button' | 'a'>('button')
 */
export const createBox = <T extends React.ElementType>(defaultAs: T) => {
  // eslint-disable-next-line react/display-name
  return ({ renderAs = defaultAs, ...rest }: PolymorphicPropsWithInnerRefType<T>) => {
    return <Box renderAs={renderAs} {...(rest as PolymorphicPropsWithInnerRefType<T>)} />;
  };
};

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
