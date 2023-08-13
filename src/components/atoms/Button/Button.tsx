import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import classMerge from "utils/classMerge";

const buttonVariants = cva(
  "relative flex justify-center items-center gap-s overflow-hidden rounded-m",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-on",
        secondary: "bg-secondary text-secondary-on",
        danger: "bg-red text-red-on",
        text: "text-surface-on-variant",
        disabled:
          "bg-transparent text-surface-on text-opacity-30 pointer-events-none",
      },
      size: {
        s: "text-s px-m py-xs",
        m: "text-m px-xl py-s",
        l: "text-xl px-xl py-s",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "m",
    },
  }
);

const stateLayerVariants = cva(
  "w-full h-full absolute opacity-0 hover:opacity-20 active:opacity-10",
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

type ButtonPropsType<T extends React.ElementType> = {
  as?: T;
  disabled?: boolean;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "disabled"> &
  VariantProps<typeof buttonVariants>;

type statePropsType = VariantProps<typeof stateLayerVariants>;

const StateLayer = ({ variant }: statePropsType) => {
  return (
    <div
      className={stateLayerVariants({
        variant,
      })}
    />
  );
};

const ButtonComponent = <T extends React.ElementType = "button">(
  {
    children,
    as,
    className,
    variant,
    size,
    disabled,
    ...props
  }: ButtonPropsType<T>,
  ref: React.ComponentPropsWithRef<T>["ref"]
) => {
  const ButtonComponent = as || "button";

  variant = disabled ? "disabled" : variant;

  return (
    <ButtonComponent
      ref={ref}
      className={classMerge([className, buttonVariants({ variant, size })])}
      disabled={disabled}
      {...props}
    >
      {children}
      <StateLayer variant={variant} />
    </ButtonComponent>
  );
};

type ButtonComponentType = <T extends React.ElementType>(
  props: ButtonPropsType<T>
) => React.ReactNode | null;

const Button: ButtonComponentType = forwardRef(ButtonComponent);

export default Button;
