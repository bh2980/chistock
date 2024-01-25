import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import { tv } from "@utils/utils";

import Slot from "@atoms/Slot/Slot";

import { ButtonAlterAs, ButtonBasePropsType, ButtonDefault } from "./Button.types";

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
      s: "h-[32rem] px-s text-s gap-xs",
      m: "h-[40rem] px-m text-m gap-s",
      l: "h-[48rem] px-m text-xl gap-s",
    },
    isIconButton: {
      true: "aspect-square p-0",
    },
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
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

const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-current opacity-0 hover:opacity-20 active:opacity-10" />
  );
};

/**
 * 버튼을 표시합니다.
 */
const Button = <
  T extends ButtonDefault | ButtonAlterAs = ButtonDefault,
  A extends ButtonAlterAs = ButtonAlterAs
>({
  renderAs,
  className,
  children,
  variant,
  size,
  icon,
  iconPosition = "before",
  isIconButton,
  disabled,
  label,
  onClick,
  ...props
}: PolymorphicPropsWithInnerRefType<T, ButtonBasePropsType, A>) => {
  const asRole = renderAs === "a" ? "button" : undefined;
  const asTabIndex = renderAs === "a" ? 0 : undefined;
  const asOnClick = renderAs === "a" && disabled ? undefined : onClick;

  return (
    <Slot<ButtonDefault | ButtonAlterAs>
      renderAs={renderAs || "button"}
      className={buttonVariants({ variant, size, isIconButton, disabled, className })}
      disabled={disabled}
      role={asRole}
      tabIndex={asTabIndex}
      onClick={asOnClick}
      aria-label={label}
      {...props}
    >
      {iconPosition === "before" && icon}
      {!isIconButton && children}
      {iconPosition === "after" && icon}
      <Overlay />
    </Slot>
  );
};

export default Button;
