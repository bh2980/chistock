//TabList : Tab을 담는 컨테이너
//Tab : 라벨을 가진 버튼
//TabPanel : Tab을 클릭 시 활성화되는 영역
import { VariantProps, tv } from "tailwind-variants";

import { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import { buttonVariants } from "@atoms/Button/Button";
import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

type TabProps = ComponentPropsWithInnerRef<"button"> & VariantProps<typeof tabVariant>;

const tabVariant = tv({
  extend: buttonVariants,
  base: [
    "overflow-visible",
    "interaction:h-[3rem]",
    "interaction:top-[calc(100%-3rem)]",
    "interaction:rounded-circle",
  ],
  variants: {
    hover: {},
  },
  compoundVariants: [
    {
      selected: true,
      variant: "ghost",
      className: "text-primary font-bold",
    },
  ],
  defaultVariants: {
    variant: "ghost",
  },
});

const Tab = (props: TabProps) => {
  return (
    <Slot<"button"> className={tabVariant()} {...props}>
      <InteractionState />
      Tab
    </Slot>
  );
};

export default Tab;
