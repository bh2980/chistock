import InteractionState from "@atoms/InteractionState";
import Text from "@atoms/Text/Text";

import {
  containerVariants,
  inputVariants,
  labelVariants,
  textFieldVariants,
} from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";
import useTextFieldProps from "./useTextFieldProps";

const TextField = (props: TextFieldProps) => {
  const {
    id,
    className,
    disabled,
    error,
    readOnly,
    required,
    haveLabel,
    fullWidth,
    label,
    helperText,
    leadingIcon,
    trailingIcon,
    inputClass,
    labelClass,
    helperTextClass,
    ...inputProps
  } = useTextFieldProps(props);

  return (
    <div className={containerVariants({ disabled, error, fullWidth })}>
      <label
        className={textFieldVariants({
          focus: true,
          error,
          disabled,
          haveLabel,
          fullWidth,
          className,
        })}
        htmlFor={id}
      >
        <InteractionState />
        {leadingIcon}
        <div className="relative flex flex-col w-full h-full">
          <input
            id={id}
            className={inputVariants({
              disabled,
              error,
              haveLabel,
              readOnly,
              className: inputClass,
            })}
            disabled={disabled}
            readOnly={readOnly}
            {...inputProps}
          />
          {label && (
            <Text className={labelVariants({ error, required, readOnly, className: labelClass })}>
              {label}
            </Text>
          )}
        </div>
        {trailingIcon}
      </label>
      {helperText && (
        <Text size="body2" className={`ml-xs ${helperTextClass}`}>
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default TextField;
