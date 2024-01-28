import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

export type TextFieldBaseProps = {
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  labelClass?: string;
  inputClass?: string;
  helperTextClass?: string;
};

export type TextFieldProps = PolymorphicPropsWithInnerRefType<"input", TextFieldBaseProps>;
