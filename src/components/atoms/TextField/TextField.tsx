import InteractionState from "@atoms/InteractionState";
import Text from "@atoms/Text/Text";

import {
  containerVariants,
  inputVariants,
  labelVariants,
  textFieldVariants,
} from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";

const TextField = ({
  className,
  label,
  leadingIcon,
  trailingIcon,
  helperText,
  required,
  error,
  fullWidth,
  disabled,
  readOnly,
  ...props
}: TextFieldProps) => {
  const haveLabel = !!label;

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
      >
        <InteractionState />
        {leadingIcon}
        <div className="relative flex flex-col w-full h-full">
          <input
            className={inputVariants({ disabled, error, haveLabel, readOnly })}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
          {label && <Text className={labelVariants({ error, required, readOnly })}>{label}</Text>}
        </div>
        {trailingIcon}
      </label>
      {helperText && (
        <Text size="body2" className="ml-xs">
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default TextField;
