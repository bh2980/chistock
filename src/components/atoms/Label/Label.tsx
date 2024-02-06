import { labelVariants } from "./Label.styles";
import type { LabelProps } from "./Label.types";

const Label = ({ children, variant, size, className, ...props }: LabelProps) => {
  return (
    <span className={labelVariants({ variant, size, className })} {...props}>
      {children}
    </span>
  );
};

export default Label;
