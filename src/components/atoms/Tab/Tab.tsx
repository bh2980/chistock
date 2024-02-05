// TODO Tab Panel 만들기 -> 조건부 렌더링 컴포넌트 개발
import { SelectedListProvider } from "@contexts/SelectedContext";
import React from "react";

import InteractionState from "@atoms/InteractionState";
import Slot from "@atoms/Slot/Slot";

import { tabVariant } from "./Tab.styles";
import { TabListProps, TabProps } from "./Tab.types";
import { useTab, useTabList } from "./useTabList";

const TabList = (props: TabListProps) => {
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
    <Slot<"button"> className={tabVariant(styleVariant)} {...otherProps}>
      <InteractionState />
      {children}
    </Slot>
  );
};

Tab.TabList = TabList;

export default Tab;
