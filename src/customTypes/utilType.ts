export type NonNullableProps<Props> = {
  [P in keyof Props]: NonNullable<Props[P]>;
};
