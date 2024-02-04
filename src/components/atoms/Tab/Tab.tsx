//TabList : Tab을 담는 컨테이너
//Tab : 라벨을 가진 버튼
//TabPanel : Tab을 클릭 시 활성화되는 영역
// TODO Tab Panel 만들기 -> 조건부 렌더 컴포넌트 만들면 될 듯
// TODO 접근성 패턴 읽고 FocusTrap 만들기
// TODO unselect 불가 리스트 만들기
import { SelectedListProvider } from "@contexts/SelectedContext";
import { VariantProps } from "tailwind-variants";

import { ComponentPropsWithInnerRef } from "@customTypes/utilType";

import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import { tabVariant } from "./Tab.styles";
import useTab from "./useTab";

export type TabProps = ComponentPropsWithInnerRef<"button"> &
  VariantProps<typeof tabVariant> & { value: string };

export type TabListProps = ComponentPropsWithInnerRef<"div"> & {
  defaultSelected?: string;
};

const TabList = ({ defaultSelected, ...props }: TabListProps) => {
  return (
    <SelectedListProvider defaultSelected={defaultSelected}>
      <Slot className="flex gap-s" role="tablist" aria-orientation="horizontal" {...props} />
    </SelectedListProvider>
  );
};

const Tab = (props: TabProps) => {
  const { styleVariant, children, ...otherProps } = useTab(props);

  return (
    <Slot className={tabVariant(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

Tab.TabList = TabList;

export default Tab;
