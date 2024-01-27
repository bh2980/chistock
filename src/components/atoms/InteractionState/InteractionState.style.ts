import { tv } from "tailwind-variants";

/** focus 상태 variants
 * focus가 필요한 element에서 상속받아 사용합니다.
 */
export const focusVariants = tv({
  base: [
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-4",
    "focus-visible:outline-primary",
    "interactionFocusVisible:opacity-20",
  ],
  variants: {
    focus: {
      true: [
        "focus:outline",
        "focus:outline-2",
        "focus:outline-offset-4",
        "focus:outline-primary",
        "interactionFocus:opacity-20",
      ],
      false: [],
    },
  },
  defaultVariants: {
    focus: false,
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
      true: ["cursor-not-allowed", "bg-[#c6c6c6]", "text-[#8c8c8c]"],
      false: [],
    },
    hover: {
      true: "interactionHover:opacity-20",
      false: [],
    },
    press: {
      true: "interactionPress:opacity-40",
      false: [],
    },
    focus: {
      // 상위 extend 속성의 경우 컴포넌트에서 focus 속성을 인식 못함. -> 빈 focus 속성을 넣어줌.
      false: [],
    },
  },
  compoundVariants: [
    {
      disabled: true,
      hover: true,
      className: "interaction:hidden",
    },
    { disabled: true, press: true, className: "interaction:hidden" },
  ],
  defaultVariants: {
    disabled: false,
    hover: true,
    press: true,
  },
});