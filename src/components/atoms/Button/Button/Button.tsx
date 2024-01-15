import { cva } from "class-variance-authority";
import { twJoin } from "tailwind-merge";

import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { classMerge } from "@utils/utils";

import Box from "@atoms/Box/Box";

import {
  ButtonAlterAs,
  ButtonBasePropsType,
  ButtonDefault,
  IconWrapperPropsType,
} from "./Button.types";

export const has = (item: unknown) => !!item;

export const buttonVariants = cva(
  "relative flex justify-center items-center overflow-hidden rounded-m py-xs cursor-pointer",
  {
    variants: {
      /**
       * 버튼의 형태
       * @default secondary
       * */
      variant: {
        primary: "bg-primary text-primary-on",
        secondary: "bg-secondary text-secondary-on",
        danger: "bg-red text-red-on",
        text: "text-inherit",
      },
      /**
       * 버튼의 크기
       * @default m
       * */
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

const buttonDisabledVariants = cva("text-surface-on/30 grayscale pointer-events-none", {
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

const Overlay = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-full h-full bg-current opacity-0 hover:opacity-20 active:opacity-10" />
  );
};

const IconWrapper = ({ iconPosition, isIconButton, children }: IconWrapperPropsType) => {
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

/**
 * 버튼을 표시합니다.
 */
const Button = <
  T extends ButtonDefault | ButtonAlterAs = ButtonDefault,
  A extends ButtonAlterAs = ButtonAlterAs
>({
  children,
  renderAs,
  className,
  variant,
  size,
  icon,
  iconPosition = "before",
  disabled,
  ...props
}: PolymorphicPropsWithInnerRefType<T, ButtonBasePropsType, A>) => {
  const isIconButton = has(icon) && !has(children);

  return (
    <Box<ButtonDefault | ButtonAlterAs>
      renderAs={renderAs || "button"}
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
    </Box>
  );
};

export default Button;
