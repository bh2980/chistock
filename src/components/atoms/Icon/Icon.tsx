import { Suspense, lazy, useMemo } from "react";
import { VariantProps } from "tailwind-variants";

import { NonNullableProps } from "@customTypes/utilType";

import ICON_MAP from "@constants/iconMap";
import { textColorVariants } from "@constants/textColor";

import { tv } from "@utils/utils";

const iconVariants = tv({
  extend: textColorVariants,
  base: "stroke-2",
  variants: {
    /**
     * 아이콘의 크기를 선택하는 속성
     *
     * @default inherit
     *  */
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
    size: "inherit",
  },
});

type IconPropsType = {
  /** 렌더링할 아이콘을 선택하는 속성 */
  icon: keyof typeof ICON_MAP;
} & NonNullableProps<VariantProps<typeof iconVariants>> &
  VariantProps<typeof textColorVariants> &
  React.SVGAttributes<SVGElement>;

/** SVG 아이콘을 불러와 React Component 형태로 표시하는 컴포넌트입니다. */
const Icon = ({ icon, className, color, size, ...props }: IconPropsType) => {
  const IconComponent = useMemo(() => lazy(ICON_MAP[icon]), [icon]);

  return (
    <Suspense fallback={<div className={iconVariants({ size })} />}>
      <IconComponent className={iconVariants({ size, color, className })} {...props} />
    </Suspense>
  );
};

export default Icon;
