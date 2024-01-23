import { flexAlignVariants } from "@constants/flexAlign";

import { tv } from "@utils/utils";

const storyWrapperVariant = tv({
  extend: flexAlignVariants,
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    justifyContent: "center",
    itemAligns: "center",
    gap: "2xl",
    direction: "horizontal",
  },
});

type StoryWapperPropsType = {
  className?: string | undefined;
  children?: React.ReactNode | React.ReactNode[];
  direction?: "horizontal" | "vertical";
};

/** 스토리북 문서에서 여러 개의 스토리를 담기 위한 Wapper 컴포넌트입니다. */
const StoryWrapper = ({ className, children, direction = "horizontal" }: StoryWapperPropsType) => (
  <div className={storyWrapperVariant({ direction, className })}>{children}</div>
);

export default StoryWrapper;
