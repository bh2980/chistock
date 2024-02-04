import useSelectedList from "@hooks/useSelected";
import { useRef } from "react";
import React from "react";

import { ButtonProps, useButton } from "@atoms/Button/Button";

import type { TabListProps, TabProps } from "./Tab.types";

const useTabList = ({ children, ...props }: TabListProps) => {
  const tabRefs = useRef<HTMLElement[]>([]);
  const childrenCount = React.Children.count(children);

  const handleTabNavigation = (index: number, offset: number) => {
    const tabIndex = (index + offset + childrenCount) % childrenCount;
    tabRefs.current[tabIndex].focus();
  };

  const handleTabKeyDown =
    (index: number, onKeyUp?: (event: KeyboardEvent) => void) => (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          handleTabNavigation(index, -1);
          break;
        case "ArrowRight":
          handleTabNavigation(index, 1);
          break;
      }

      onKeyUp?.(event);
    };

  const tabChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return null;

    const { onKeyUp } = child.props;

    const saveTabRefs = (el: HTMLElement | null) => {
      if (el) tabRefs.current[index] = el;
    };

    const newProps = {
      ...child.props,
      innerRef: saveTabRefs,
      onKeyUp: handleTabKeyDown(index, onKeyUp),
    };

    return React.cloneElement(child, newProps);
  });

  return {
    ...props,
    children: tabChildren,
    role: "tablist",
    "aria-orientation": "horizontal" as const,
  };
};

const useTab = (props: TabProps) => {
  const buttonProps = useButton(props as ButtonProps<"button">);

  const { styleVariant, onClick, tabIndex, ...selectedProps } = useSelectedList(buttonProps);
  const ariaSelected = selectedProps["aria-selected"];

  const uncancelableOnClick = ariaSelected ? buttonProps.onClick : onClick;

  return {
    styleVariant: { ...styleVariant, focusOutlineOffset: false },
    ...selectedProps,
    onClick: uncancelableOnClick,
    role: "tab",
    tabIndex: ariaSelected ? tabIndex : -1,
  };
};

export { useTab, useTabList };
