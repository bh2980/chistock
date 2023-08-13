import { VariantProps, cva } from "class-variance-authority";
import { Suspense, lazy, useMemo } from "react";

import classMerge from "@utils/classMerge";
import ICON_MAP from "@constants/iconMap";

const iconVariants = cva("", {
  variants: {
    color: {
      primary: "fill-primary",
      primaryFixed: "fill-primary-fixed",
      secondary: "fill-secondary",
      secondaryFixed: "fill-secondary-fixed",
      tertiary: "fill-tertiary",
      tertiaryFixed: "fill-tertiary-fixed",
      red: "fill-red",
      yellow: "fill-yellow",
      green: "fill-green",
      magenta: "fill-magenta",
      onSurface: "fill-surface-on",
      onSub: "fill-surface-on-variant",
      onPrimary: "fill-primary-on",
      onPrimaryFixed: "fill-primary-fixed-on",
      onSecondary: "fill-secondary-on",
      onSecondaryFixed: "fill-secondary-fixed-on",
      onTertiary: "fill-tertiary-on",
      onTertiaryFixed: "fill-tertiary-fixed-on",
      onRed: "fill-red-on",
      onRedSub: "fill-red-variant-on",
      onYellow: "fill-yellow-on",
      onGreen: "fill-green-on",
      onMagenta: "fill-magenta-on",
    },
    size: {
      s: "w-s h-s",
      m: "w-m h-m",
      l: "w-l h-l",
      xl: "w-xl h-xl",
      "2xl": "w-2xl h-2xl",
      "3xl": "w-3xl h-3xl",
    },
  },
  defaultVariants: {
    color: "onSurface",
    size: "m",
  },
});

type IconPropsType = {
  icon: keyof typeof ICON_MAP;
} & VariantProps<typeof iconVariants>;

const Icon = ({ icon, color, size, ...props }: IconPropsType) => {
  const IconComponent = useMemo(() => lazy(ICON_MAP[icon]), [icon]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <IconComponent
        className={classMerge(iconVariants({ color, size }))}
        {...props}
      />
    </Suspense>
  );
};

export default Icon;
