import Slot from "@atoms/Slot/Slot";

import { labelVariants } from "./Label.styles";
import type { LabelProps } from "./Label.types";

const Label = ({ children, variant, size, className, ...props }: LabelProps) => {
  return (
    <Slot renderAs="span" className={labelVariants({ variant, size, className })} {...props}>
      {children}
    </Slot>
  );
};

export default Label;
