type AsPropType<T extends React.ElementType> = {
  renderAs?: T;
};

export type PolymorphicRefType<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type InnerRefType<T extends React.ElementType> = {
  innerRef?: PolymorphicRefType<T>;
};

export type PolymorphicPropsType<
  T extends React.ElementType,
  Props = object
> = AsPropType<T> &
  Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props>;

export type PolymorphicPropsTypeWithInnerRef<
  T extends React.ElementType,
  Props = object
> = PolymorphicPropsType<T, Props> & InnerRefType<T>;
