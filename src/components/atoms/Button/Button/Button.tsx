import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import Box from "@atoms/Box/Box";

import {
  ButtonAlterAs,
  ButtonBasePropsType,
  ButtonDefault,
  IconWrapperPropsType,
} from "./Button.types";

export const has = (item: unknown) => !!item;

export const buttonVariants = tv({
  base: "relative flex justify-center items-center overflow-hidden rounded-m py-xs cursor-pointer",
  variants: {
    /**
     * 버튼의 형태
     * @default secondary
     * */
    variant: {
      primary: "bg-primary text-primary-on",
      secondary: "bg-secondary text-secondary-on",
      danger: "bg-red text-red-on",
      text: "bg-transparent text-inherit",
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
    isIconButton: {
      true: "",
    },
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      isIconButton: true,
      size: "s",
      className: "aspect-square p-xs",
    },
    {
      isIconButton: true,
      size: ["m", "l"],
      className: "aspect-square p-s",
    },
    {
      disabled: true,
      variant: ["primary", "secondary", "danger", "text"],
      className: "text-surface-on/30 grayscale pointer-events-none",
    },
    {
      disabled: true,
      variant: ["primary", "secondary", "danger"],
      className: "bg-surface-on/10",
    },
  ],
  defaultVariants: {
    variant: "secondary",
    size: "m",
  },
});

const iconWraperVariant = tv({
  base: "leading-none",
  variants: {
    isIconButton: {
      false: "",
    },
    iconPosition: {
      before: "",
      after: "",
    },
  },
  compoundVariants: [
    {
      isIconButton: false,
      iconPosition: "before",
      className: "mr-xs",
    },
    {
      isIconButton: false,
      iconPosition: "after",
      className: "ml-xs",
    },
  ],
});

const Overlay = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-full h-full bg-current opacity-0 hover:opacity-20 active:opacity-10" />
  );
};

const IconWrapper = ({ iconPosition, isIconButton, children }: IconWrapperPropsType) => {
  return <span className={iconWraperVariant({ iconPosition, isIconButton })}>{children}</span>;
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
      className={buttonVariants({ variant, size, isIconButton, disabled, className })}
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
