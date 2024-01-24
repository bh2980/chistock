import { tv } from "@utils/utils";

const storyWrapperVariant = tv({
  base: "flex justify-center items-center gap-xl",
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
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
