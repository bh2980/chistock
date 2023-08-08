import { VariantProps, cva, cx } from "class-variance-authority";
import * as NextImage from "next/image";

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
    <div className={cx(className, ImageVariants({ rounded }))}>
      <NextImage.default
        fill={true}
        alt={alt}
        style={{ objectFit: "cover" }}
        {...props}
      />
    </div>
  );
};

export default Image;
