import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import classMerge from "@utils/classMerge";
import { twJoin } from "tailwind-merge";
import { PolymorphicComponentType, PolymorphicPropsType, PolymorphicRefType } from "@customTypes/polymorphicType";

export type ButtonPropsType = {
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPosition?: "before" | "after";
} & Omit<VariantProps<typeof buttonVariants>, "variant"> & {
    variant: Exclude<VariantProps<typeof buttonVariants>["variant"], "disabled">;
  };

type statePropsType = VariantProps<typeof stateLayerVariants>;

export const has = (item: unknown) => {
  return !!item;
};

const buttonVariants = cva("relative flex justify-center items-center overflow-hidden rounded-m py-xs", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      danger: "bg-red text-red-on",
      text: "text-surface-on-variant",
      disabled: "bg-transparent text-surface-on text-opacity-30 pointer-events-none",
    },
    size: {
      s: "h-[32rem] px-s text-s gap-xs",
      m: "h-[40rem] px-m text-m gap-xs",
      l: "h-[48rem] px-m text-xl gap-s",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "m",
  },
});

const iconButtonPadding = cva("aspect-square", {
  variants: {
    size: {
      s: "p-xs",
      m: "p-s",
      l: "p-s",
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
        disabled: "bg-surface-on opacity-10",
      },
    },
    defaultVariants: {
      variant: "secondary",
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
  {
    children,
    as,
    className,
    variant,
    size,
    icon,
    iconPosition = "before",
    ...props
  }: PolymorphicPropsType<T, ButtonPropsType>,
  ref: PolymorphicRefType<T>
) {
  const ButtonComponent = as || "button";

  const btnVariant = props.disabled ? "disabled" : variant;
  const isIconButton = has(icon) && !has(children);

  return (
    <ButtonComponent
      ref={ref}
      className={classMerge(
        twJoin([buttonVariants({ variant: btnVariant, size }), isIconButton && iconButtonPadding({ size }), className])
      )}
      {...props}
    >
      {icon && iconPosition === "before" && icon}
      {children}
      {icon && iconPosition === "after" && icon}
      <StateLayer variant={btnVariant} />
    </ButtonComponent>
  );
});

export default Button;
