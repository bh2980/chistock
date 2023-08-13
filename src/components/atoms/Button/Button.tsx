import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import classMerge from "utils/classMerge";

const buttonVariants = cva(
  "relative flex justify-center items-center gap-s overflow-hidden rounded-m disabled:bg-transparent disabled:text-surface-on disabled:text-opacity-30",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-on",
        secondary: "bg-secondary text-secondary-on",
        danger: "bg-red text-red-on",
        text: "text-surface-on-variant",
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

type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

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

type statePropsType = {
  disabled: boolean | undefined;
} & VariantProps<typeof stateLayerVariants>;

const StateLayer = ({ variant, disabled }: statePropsType) => {
  return (
    <div
      className={stateLayerVariants({
        variant: disabled ? "disabled" : variant,
      })}
    />
  );
};

const Button = (
  { children, className, variant, size, disabled, ...props }: ButtonPropsType,
  ref: React.LegacyRef<HTMLButtonElement> | undefined
) => {
  return (
    <button
      ref={ref}
      className={classMerge([className, buttonVariants({ variant, size })])}
      disabled={disabled}
      {...props}
    >
      {children}
      <StateLayer variant={variant} disabled={disabled} />
    </button>
  );
};

export default forwardRef<HTMLButtonElement, ButtonPropsType>(Button);
