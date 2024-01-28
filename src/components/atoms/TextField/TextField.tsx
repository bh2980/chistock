import { useState } from "react";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import InteractionState, { interactionStateVariants } from "@atoms/InteractionState";
import Text from "@atoms/Text/Text";

const textfieldVariants = tv({
  extend: interactionStateVariants,
  base: "flex justify-between items-center gap-m text-left w-[320px] px-l bg-surface-variant-high rounded-m py-xs cursor-text text-m",
  variants: {
    focus: {
      true: [
        "interactionFocus:opacity-0",
        "interactionFocusVisible:opacity-0",
        "focus-within:outline-offset-0",
      ],
    },
    error: {
      true: ["!bg-red/20", "!text-red", "!outline-red", "outline", "outline-1"],
    },
    haveLabel: {
      true: "h-[64px]",
      false: "h-[40px]",
    },
  },
});

const labelVariants = tv({
  base: "absolute peer-focus:text-primary peer-focus:top-2xs peer-focus:text-xs transition-['font-size']",
  variants: {
    isFilled: {
      true: "text-primary top-2xs text-xs",
      false: "text-m top-s",
    },
    error: {
      true: "!text-red",
    },
  },
});

const inputVariants = tv({
  base: "w-full h-[32rem] bg-transparent text-m text-surface-on placeholder:text-surface-on-variant placeholder:invisible focus:placeholder:visible",
  variants: {
    haveLabel: {
      true: "peer absolute bottom-0",
    },
  },
});

const helperTextVariants = tv({
  base: "ml-xs",
  variants: {
    error: {
      true: "text-red",
    },
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
  const [inputValue, setInputValue] = useState("");

  const isFilled = inputValue.length > 0;
  const haveLabel = !!label;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-xs text-surface-on-variant">
        <label className={textfieldVariants({ haveLabel, error, focus: true, className })}>
          <InteractionState />
          {leadingIcon}
          <div className="relative flex flex-col w-full h-full">
            <input
              className={inputVariants({ haveLabel })}
              value={inputValue}
              onChange={onChange}
              placeholder={placeholder}
              {...props}
            />
            {label && (
              <Text className={labelVariants({ error, isFilled, className: "flex gap-3xs" })}>
                {label}
                {required && <Text color="red">*</Text>}
              </Text>
            )}
          </div>
          {trailingIcon}
        </label>
        {helperText && (
          <Text size="body2" className={helperTextVariants({ error })}>
            {helperText}
          </Text>
        )}
      </div>
    </>
  );
};

export default TextField;
