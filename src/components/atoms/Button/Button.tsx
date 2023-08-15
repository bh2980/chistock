import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import Icon from "@atoms/Icon/Icon";
import Text from "@atoms/Text/Text";

import classMerge from "@utils/classMerge";
import { PolymorphicComponentType, PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";

export type ButtonPropsType = {
  disabled?: boolean;
} & VariantProps<typeof buttonVariants>;

type statePropsType = VariantProps<typeof stateLayerVariants>;

const buttonVariants = cva("relative flex justify-center items-center overflow-hidden rounded-m p-xs", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      danger: "bg-red text-red-on",
      text: "text-surface-on-variant",
      disabled: "bg-transparent text-surface-on text-opacity-30 pointer-events-none",
    },
    size: {
      s: "text-s",
      m: "text-m",
      l: "text-xl",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "m",
  },
});

const buttonIconVariants = cva("", {
  variants: {
    size: {
      s: "w-m h-m",
      m: "w-xl h-xl",
      l: "w-2xl h-2xl",
    },
  },
});

const stateLayerVariants = cva(
  "absolute top-[0rem] left-[0rem] w-full h-full opacity-0 hover:opacity-20 active:opacity-10",
  {
    variants: {
      variant: {
        primary: "bg-primary-on",
        secondary: "bg-secondary-on",
        danger: "bg-red-on",
        text: "bg-surface-on-variant",
        disabled: "bg-surface-on opacity-10 hover:opacity-10 active:opacity-10",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const StateLayer = ({ variant }: statePropsType) => {
  return (
    <div
      className={stateLayerVariants({
        variant,
      })}
    />
  );
};

const Button: PolymorphicComponentType<"button", ButtonPropsType> = forwardRef(function Button<
  T extends React.ElementType
>(
  { children, as, className, variant, size, disabled, ...props }: PolymorphicPropsType<T, ButtonPropsType>,
  ref: PolymorphicRefType<T>
) {
  const ButtonComponent = as || "button";
  const TEXT_PADDING_X = "px-xs";

  variant = disabled ? "disabled" : variant;

  return (
    <ButtonComponent
      ref={ref}
      className={classMerge([buttonVariants({ variant, size }), className])}
      disabled={disabled}
      {...props}
    >
      {React.Children.map(children, (child) => {
        const prevClasses: string = child.props?.className;

        if (React.isValidElement(child) && child.type === Icon) {
          return React.cloneElement(child, {
            className: classMerge([buttonIconVariants({ size }), prevClasses]),
          });
        } else if (React.isValidElement(child) && child.type === Text) {
          return React.cloneElement(child, {
            className: classMerge([TEXT_PADDING_X, prevClasses]),
          });
        } else if (typeof child === "string") {
          return <Text className={classMerge([TEXT_PADDING_X, prevClasses])}>{child}</Text>;
        }

        return child;
      })}
      <StateLayer variant={variant} />
    </ButtonComponent>
  );
});

export default Button;
