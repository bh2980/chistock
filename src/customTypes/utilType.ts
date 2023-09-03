import { VariantProps } from "class-variance-authority";

/** 객체 속성의 값들에서 Nullable한 값 제거하는 타입 */
export type NonNullableProps<Obj> = {
  [P in keyof Obj]: NonNullable<Obj[P]>;
};

/** VariantsProps의 속성의 값들에서 Nullable한 값 제거한 타입 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantPropsType<Component extends (...args: any) => any> = NonNullableProps<
  VariantProps<Component>
>;
