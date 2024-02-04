//TabList : Tab을 담는 컨테이너
//Tab : 라벨을 가진 버튼
//TabPanel : Tab을 클릭 시 활성화되는 영역
// TODO Tab Panel 만들기 -> 조건부 렌더 컴포넌트 만들면 될 듯
// unselect 불가 리스트 만들기
import { SelectedListProvider } from "@contexts/SelectedContext";
import React from "react";

import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import { tabVariant } from "./Tab.styles";
import { TabListProps, TabProps } from "./Tab.types";
import { useTab, useTabList } from "./useTabList";

const TabList = (props: TabListProps) => {
  // Tab에 focus가 있을때 Tab키를 누르면 focus가 Tab List를 나가야함.
  // defaultSelected가 있으면 해당 tab의 tabindex를 0으로 설정하고 나머지를 -1로 설정
  // Tab이 focus되어있을 경우 좌우 방향키로 Tab focus를 이동시킬 수 있어야함
  // Tab의 focus는 반복순회 가능해야함어
  // 기존 onKeyUp 실행

  const { defaultSelected, children, ...otherProps } = useTabList(props);

  return (
    <SelectedListProvider defaultSelected={defaultSelected}>
      <Slot className="flex gap-s" {...otherProps}>
        {children}
      </Slot>
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
