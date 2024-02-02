import { tv } from "tailwind-variants";

/** focus 상태 variants
 * focus가 필요한 element에서 상속받아 사용합니다.
 */
export const focusVariants = tv({
  base: [
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-primary",
    "interactionFocusVisible:opacity-hocus",
  ],
  variants: {
    focus: {
      true: [
        "focus-within:outline",
        "focus-within:outline-2",
        "focus-within:outline-primary",
        "interactionFocus:opacity-hocus",
      ],
      false: [],
    },
    focusOutlineOffset: {
      true: "focus-visible:outline-offset-4 focus-within:outline-offset-4",
    },
  },
  defaultVariants: {
    focus: false,
    focusOutlineOffset: false,
  },
});

/**
 * interactionState를 사용해야하는 컴포넌트에서 상속받아 사용합니다.
 */
export const interactionStateVariants = tv({
  extend: focusVariants,
  base: [
    "relative",
    "overflow-hidden",
    "interaction:absolute",
    "interaction:top-0",
    "interaction:left-0",
    "interaction:w-full",
    "interaction:h-full",
    "interaction:bg-current",
    "interaction:opacity-0",
  ],
  variants: {
    disabled: {
      false: [],
    },
    hover: {
      true: "interactionHover:opacity-hocus",
      false: [],
    },
    press: {
      true: "interactionPress:opacity-press",
      false: [],
    },
    focus: {
      // 상위 extend 속성의 경우 컴포넌트에서 focus 속성을 인식 못함. -> 빈 focus 속성을 넣어줌.
      true: "",
    },
    focusOutlineOffset: {
      true: "",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      hover: [true, false],
      press: [true, false],
      className: [
        "cursor-not-allowed",
        "bg-transparent",
        "text-surface-on/40",
        "border-opacity-disabled",
        "interaction:opacity-disabled",
        "interactionHover:opacity-disabled",
        "interactionPress:opacity-disabled",
      ],
    },
  ],
  defaultVariants: {
    disabled: false,
    hover: true,
    press: true,
  },
});
