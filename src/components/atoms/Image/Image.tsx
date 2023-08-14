import * as NextImage from "next/image";
import { VariantProps, cva } from "class-variance-authority";

import classMerge from "@utils/classMerge";

const ImageVariants = cva("relative overflow-hidden aspect-square", {
  variants: {
    rounded: {
      none: "rounded-none",
      xs: "rounded-xs",
      s: "rounded-s",
      m: "rounded-m",
      l: "rounded-l",
      circle: "rounded-circle",
    },
  },
  defaultVariants: {
    rounded: "m",
  },
});

type ImagePropsType = Omit<
  NextImage.ImageProps,
  | "width"
  | "height"
  | "fill"
  //이하 deprecated props
  | "layout"
  | "objectFit"
  | "objectPosition"
  | "lazyBoundary"
  | "lazyRoot"
> &
  VariantProps<typeof ImageVariants>;

const Image = ({ className, rounded, alt, ...props }: ImagePropsType) => {
  return (
    <div className={classMerge([className, ImageVariants({ rounded })])}>
      <NextImage.default fill={true} alt={alt} style={{ objectFit: "cover" }} {...props} />
    </div>
  );
};

export default Image;
