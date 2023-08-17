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

const has = (item: unknown) => {
  return !!item;
};

const buttonVariants = cva("relative flex justify-center items-center overflow-hidden rounded-m px-m py-xs", {
  variants: {
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      danger: "bg-red text-red-on",
      text: "text-surface-on-variant",
      disabled: "bg-transparent text-surface-on text-opacity-30 pointer-events-none",
    },
    size: {
      s: "text-s gap-xs",
      m: "text-m gap-xs",
      l: "text-xl gap-s",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "m",
  },
});

const iconButtonPadding = cva("", {
  variants: {
    size: {
      s: "p-xs",
      m: "p-s",
      l: "p-s",
    },
  },
});

const buttonIconSize = cva("inline-flex justify-center items-center", {
  variants: {
    size: {
      s: "w-m h-m",
      m: "w-m h-m",
      l: "w-xl h-xl",
    },
  },
  defaultVariants: {
    size: "m",
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
        disabled: "bg-surface-on opacity-10 hover:opacity-10 active:opacity-10 pointer-events-none",
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
      {icon && iconPosition === "before" && <span className={buttonIconSize({ size })}>{icon}</span>}
      {children}
      {icon && iconPosition === "after" && <span className={buttonIconSize({ size })}>{icon}</span>}
      <StateLayer variant={btnVariant} />
    </ButtonComponent>
  );
});

export default Button;
