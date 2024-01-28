import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

export type TextFieldBaseProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
};

export type TextFieldProps = PolymorphicPropsWithInnerRefType<"input", TextFieldBaseProps>;
