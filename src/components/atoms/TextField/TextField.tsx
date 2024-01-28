import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import InteractionState, { interactionStateVariants } from "@atoms/InteractionState";
import Text from "@atoms/Text/Text";

const containerVariants = tv({
  base: "flex flex-col gap-xs text-surface-on-variant",
  variants: {
    error: { true: "!text-red" },
  },
});

const textfieldVariants = tv({
  extend: interactionStateVariants,
  base: [
    "flex",
    "justify-between",
    "items-center",
    "gap-m",
    "w-[320px]",
    "bg-surface-variant-high",
    "px-l",
    "py-xs",
    "text-left",
    "text-m",
    "rounded-m",
    "cursor-text",
  ],
  variants: {
    focus: {
      true: "interactionFocus:opacity-0 interactionFocusVisible:opacity-0",
    },
    error: {
      true: ["!bg-red/20", "!outline-red", "outline", "outline-1"],
    },
    haveLabel: {
      true: "h-[64px]",
      false: "h-[40px]",
    },
  },
});

const labelVariants = tv({
  base: [
    "absolute",
    "flex",
    "gap-3xs",
    "top-2xs",
    "text-primary",
    "text-xs",
    "transition-['font-size']",
    "peer-placeholder-shown:text-m",
    "peer-placeholder-shown:top-s",
    "peer-focus:text-primary",
    "peer-focus:top-2xs",
    "peer-focus:text-xs",
  ],
  variants: {
    error: {
      true: "peer-focus:text-red",
    },
  },
});

const inputVariants = tv({
  base: [
    "peer",
    "w-full",
    "h-[32rem]",
    "bg-transparent",
    "text-m",
    "text-surface-on",
    "placeholder:text-surface-on-variant",
    "placeholder:invisible",
    "focus:placeholder:visible",
  ],
  variants: {
    haveLabel: {
      true: "absolute bottom-0",
    },
    error: { true: "text-red" },
  },
});

type TextFielsBaseProps = {
  label: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
  error?: boolean;
};

const TextField = ({
  className,
  label = "레이블",
  leadingIcon,
  trailingIcon,
  helperText = "helperText",
  required = true,
  error,
  placeholder = "대체 텍스트",
  ...props
}: PolymorphicPropsWithInnerRefType<"input", TextFielsBaseProps>) => {
  const haveLabel = !!label;

  return (
    <div className={containerVariants({ error })}>
      <label className={textfieldVariants({ haveLabel, error, className, focus: true })}>
        <InteractionState />
        {leadingIcon}
        <div className="relative flex flex-col w-full h-full">
          <input
            className={inputVariants({ haveLabel, error })}
            placeholder={placeholder}
            {...props}
          />
          {label && (
            <Text className={labelVariants({ error })}>
              {label}
              {required && <Text color="red">*</Text>}
            </Text>
          )}
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
