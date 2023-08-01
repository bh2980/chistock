import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import classMerge from "utils/classMerge";

const buttonVariants = cva(
  "relative flex justify-center items-center gap-s w-auto h-auto overflow-hidden rounded-m disabled:bg-surface-on disabled:opacity-10",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-on",
        secondary: "bg-secondary text-secondary-on",
        danger: "bg-red text-red-on",
        ghost: "text-surface-on",
      },
      size: {
        sm: "text-s px-m py-xs",
        md: "text-m px-xl py-s",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const stateLayerVariants = cva(
  "w-full h-full absolute opacity-0 hover:opacity-20 active:opacity-10",
  {
    variants: {
      variant: {
        primary: "bg-primary-on",
        secondary: "bg-secondary-on",
        danger: "bg-red-on",
        ghost: "bg-surface-on",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const StateLayer = ({ variant }: VariantProps<typeof stateLayerVariants>) => {
  return <div className={stateLayerVariants({ variant })} />;
};

const Button = (
  { children, variant, size, ...props }: ButtonProps,
  ref: React.LegacyRef<HTMLButtonElement> | undefined
) => {
  return (
    <button
      ref={ref}
      className={classMerge(buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
      {!props.disabled && <StateLayer variant={variant} />}
    </button>
  );
};

export default forwardRef<HTMLButtonElement, ButtonProps>(Button);
