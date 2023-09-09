/**
 * 렌더링할 태그를 결정하는 renderAs 속성을 정의하는 타입
 *
 * @param `T` : 렌더링 될 수 있는 컴포넌트 타입
 * @param [`A`] : 추가적으로 렌더링 될 수 있는 컴포넌트 타입 (TS 자동완성을 위해 사용)
 *
 * @example
 * // { renderAs? : 'div' }
 * AsPropsType<'div'>
 *
 * // { renderAs? : 'div' | 'a' | 'button' }
 * AsPropsType<'div', 'a' | 'button'>
 */
type AsPropsType<T extends React.ElementType> = {
  /** 렌더링할 태그 속성 */
  renderAs?: T;
};

/**
 * T를 받아서 T가 가지고 있는 ref 타입으로 innerRef 타입을 지정하는 타입
 *
 * @param `T` : 렌더링할 컴포넌트 타입
 *
 * @example
 * // { innerRef?: RejObject<HTMLDivElement> | ... }
 * InnreRefType<'div'>
 */
type InnerRefType<T extends React.ElementType> = {
  /**
   * ref를 대체하는 속성
   *
   * @type React.ComponentPropsWithRef<T>["ref"]
   * */
  innerRef?: React.ComponentPropsWithRef<T>["ref"];
};

/**
 * 다형성 컴포넌트 Props 타입
 *
 * renderAs와 태그, 컴포넌트 기본 Props 추가
 *
 * @param `T` : Props를 사용할 컴포넌트 타입
 * @param [`Props`] : 컴포넌트 커스텀 Props
 * @param [`A`] : 추가적으로 렌더링 될 수 있는 컴포넌트 타입 (TS 자동완성을 위해 사용)
 */
export type PolymorphicPropsType<
  T extends React.ElementType,
  Props = object,
  AlternateAs extends React.ElementType = T
> = AsPropsType<T | AlternateAs> & Props & Omit<React.ComponentPropsWithoutRef<T>, keyof Props>;

/**
 * 다형성 컴포넌트 Props 타입에 innerRef 속성을 추가한 타입
 *
 * renderAs, innerRef와 태그, 컴포넌트 기본 Props 추가
 *
 * @param `T` : Props를 사용할 컴포넌트 타입
 * @param [`Props`] : 컴포넌트 커스텀 Props
 * @param [`A`] : 추가적으로 렌더링 될 수 있는 컴포넌트 타입 (TS 자동완성을 위해 사용)
 */
export type PolymorphicPropsWithInnerRefType<
  T extends React.ElementType,
  Props = object,
  AlternateAs extends React.ElementType = T
> = PolymorphicPropsType<T, Props, AlternateAs> & InnerRefType<T>;
