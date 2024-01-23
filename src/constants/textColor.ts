import { tv } from "tailwind-variants";

/** Text가 가질 수 있는 색상 Class 모음 객체 */
export const textColor = {
  transparent: "text-transparent",
  inherit: "text-inherit",
  primary: "text-primary",
  primaryFixed: "text-primary-fixed",
  secondary: "text-secondary",
  secondaryFixed: "text-secondary-fixed",
  tertiary: "text-tertiary",
  tertiaryFixed: "text-tertiary-fixed",
  red: "text-red",
  redVariant: "text-red-variant",
  yellow: "text-yellow",
  green: "text-green",
  magenta: "text-magenta",
  onSurface: "text-surface-on",
  onSurfaceVariant: "text-surface-on-variant",
  onPrimary: "text-primary-on",
  onPrimaryFixed: "text-primary-fixed-on",
  onSecondary: "text-secondary-on",
  onSecondaryFixed: "text-secondary-fixed-on",
  onTertiary: "text-tertiary-on",
  onTertiaryFixed: "text-tertiary-fixed-on",
  onRed: "text-red-on",
  onRedVariant: "text-red-variant-on",
  onYellow: "text-yellow-on",
  onGreen: "text-green-on",
  onMagenta: "text-magenta-on",
};

/** 텍스트 색상 지정용 cva 함수 */
export const textColorVariants = tv({
  variants: {
    /**
     * 텍스트의 색상을 설정하는 속성
     *
     * @default inherit
     *  */
    color: textColor,
  },
  defaultVariants: { color: "inherit" },
});
