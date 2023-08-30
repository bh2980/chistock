import React, { PropsWithChildren } from "react";
import { VariantProps, cva } from "class-variance-authority";

import classMerge from "@utils/classMerge";
import { twJoin } from "tailwind-merge";

import { PolymorphicPropsTypeWithInnerRef } from "@customTypes/polymorphicType";

export type ButtonPropsType = {
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPosition?: "before" | "after";
} & VariantProps<typeof buttonVariants>;

export const has = (item: unknown) => !!item;

type IconWrapperPropsType = PropsWithChildren &
  Pick<ButtonPropsType, "iconPosition"> & {
    isIconButton?: boolean;
  };

const buttonVariants = cva(
  "relative flex justify-center items-center overflow-hidden rounded-m py-xs",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-on",
        secondary: "bg-secondary text-secondary-on",
        danger: "bg-red text-red-on",
        text: "text-surface-on-variant",
      },
      size: {
        s: "h-[32rem] px-s text-s",
        m: "h-[40rem] px-m text-m",
        l: "h-[48rem] px-m text-xl",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "m",
    },
  }
);

const buttonDisabledVariants = cva(
  "text-surface-on/30 grayscale pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-surface-on/10",
        secondary: "bg-surface-on/10",
        danger: "bg-surface-on/10",
        text: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

const iconButtonPadding = cva("aspect-square", {
  variants: {
    size: {
      s: "p-xs",
      m: "p-s",
      l: "p-s",
    },
  },
});

const Overlay = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-full h-full bg-current opacity-0 hover:opacity-20 active:opacity-10" />
  );
};

const IconWrapper = ({
  iconPosition,
  isIconButton,
  children,
}: IconWrapperPropsType) => {
  return (
    <span
      className={twJoin(
        "leading-none",
        !isIconButton && [iconPosition === "before" ? "mr-xs" : "ml-xs"]
      )}
    >
      {children}
    </span>
  );
};

const Button = <T extends React.ElementType>({
  children,
  renderAs,
  className,
  variant,
  size,
  icon,
  iconPosition = "before",
  innerRef,
  disabled,
  ...props
}: PolymorphicPropsTypeWithInnerRef<T, ButtonPropsType>) => {
  const ButtonComponent = renderAs || "button";

  const isIconButton = has(icon) && !has(children);

  return (
    <ButtonComponent
      ref={innerRef}
      className={classMerge(
        twJoin([
          buttonVariants({ variant, size }),
          isIconButton && iconButtonPadding({ size }),
          className,
          disabled && buttonDisabledVariants({ variant }),
        ])
      )}
      {...props}
    >
      {icon && iconPosition === "before" && (
        <IconWrapper iconPosition={iconPosition} isIconButton={isIconButton}>
          {icon}
        </IconWrapper>
      )}
      {children}
      {icon && iconPosition === "after" && (
        <IconWrapper iconPosition={iconPosition} isIconButton={isIconButton}>
          {icon}
        </IconWrapper>
      )}
      <Overlay />
    </ButtonComponent>
  );
};

export default Button;
