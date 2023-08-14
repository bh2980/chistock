type AsPropType<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicRefType<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicPropsType<T extends React.ElementType, Props = object> = AsPropType<T> &
  Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props> & {
    ref?: PolymorphicRefType<T>;
  };

export type PolymorphicComponentType<TDefault extends React.ElementType, K = object> = <
  T extends React.ElementType = TDefault
>(
  props: PolymorphicPropsType<T, K>
) => React.ReactNode | null;
