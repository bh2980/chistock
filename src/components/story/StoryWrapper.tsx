import { classMerge } from "@utils/utils";

type StoryWapperPropsType = {
  className?: string | undefined;
  children?: React.ReactNode | React.ReactNode[];
  direction?: "horizontal" | "vertical";
};

/** 스토리북 문서에서 여러 개의 스토리를 담기 위한 Wapper 컴포넌트입니다. */
const StoryWrapper = ({ className, children, direction = "horizontal" }: StoryWapperPropsType) => (
  <div
    className={classMerge([
      "flex gap-2xl justify-center items-center",
      direction === "horizontal" ? "flex-row" : "flex-col",
      className,
    ])}
  >
    {children}
  </div>
);

export default StoryWrapper;
