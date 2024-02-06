import React from "react";

import Slot from "@atoms/Slot/Slot";

import { listVariant } from "./List.styles";
import { ListProps } from "./List.types";
import { useListStyle } from "./useList";

const List = (props: ListProps) => {
  const { styleVariant, children, rating, divider, ...otherProps } = useListStyle(props);

  return (
    <Slot className={listVariant(styleVariant)} {...otherProps}>
      {React.Children.map(children, (child, idx) => {
        return (
          <>
            <div>
              {rating ? (
                <div className="flex items-center">
                  <div className="w-[16rem] text-center text-m text-surface-on-variant m-xs">
                    {idx + 1}
                  </div>
                  {child}
                </div>
              ) : (
                child
              )}
            </div>
            {idx !== React.Children.count(children) - 1 && divider}
          </>
        );
      })}
    </Slot>
  );
};

export default List;
