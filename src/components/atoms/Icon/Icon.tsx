import { VariantProps, cva } from "class-variance-authority";
import { Suspense, lazy, useMemo } from "react";

import classMerge from "@utils/classMerge";
import ICON_MAP from "@constants/iconMap";

const iconVariants = cva("stroke-2", {
  variants: {
    color: {
      transparent: "text-transparent",
      current: "text-current",
      primary: "text-primary",
      primaryFixed: "text-primary-fixed",
      secondary: "text-secondary",
      secondaryFixed: "text-secondary-fixed",
      tertiary: "text-tertiary",
      tertiaryFixed: "text-tertiary-fixed",
      red: "text-red",
      yellow: "text-yellow",
      green: "text-green",
      magenta: "text-magenta",
      onSurface: "text-surface-on",
      onSub: "text-surface-on-variant",
      onPrimary: "text-primary-on",
      onPrimaryFixed: "text-primary-fixed-on",
      onSecondary: "text-secondary-on",
      onSecondaryFixed: "text-secondary-fixed-on",
      onTertiary: "text-tertiary-on",
      onTertiaryFixed: "text-tertiary-fixed-on",
      onRed: "text-red-on",
      onRedSub: "text-red-variant-on",
      onYellow: "text-yellow-on",
      onGreen: "text-green-on",
      onMagenta: "text-magenta-on",
    },
    size: {
      inherit: "w-[1em] h-[1em]",
      s: "w-s h-s",
      m: "w-m h-m",
      l: "w-l h-l",
      xl: "w-xl h-xl",
      "2xl": "w-2xl h-2xl",
      "3xl": "w-3xl h-3xl",
    },
  },
  defaultVariants: {
    color: "current",
    size: "inherit",
  },
});

type IconPropsType = {
  icon: keyof typeof ICON_MAP;
} & VariantProps<typeof iconVariants> &
  React.SVGAttributes<SVGElement>;

const Icon = ({ icon, className, color, size, ...props }: IconPropsType) => {
  const IconComponent = useMemo(() => lazy(ICON_MAP[icon]), [icon]);

  return (
    <Suspense fallback={<div className={classMerge([iconVariants({ color: "transparent", size })])} />}>
      <IconComponent className={classMerge([iconVariants({ color, size }), className])} {...props} />
    </Suspense>
  );
};

export default Icon;
