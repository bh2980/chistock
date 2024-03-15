import { checkNumType } from "@utils/checkNumType";
import { getFormatNumber } from "@utils/getFormatNumber";

import Text from "@atoms/Text";

import { FlowStockItemVariants } from "./FlowStockItem.styles";
import type { FlotStockItemProps } from "./FlowStockItem.types";

const FlowStockItem = ({ ticker, price, changePercentage }: FlotStockItemProps) => {
  const numType = checkNumType(changePercentage);

  const { root, changePercentageText } = FlowStockItemVariants();

  const prefix = changePercentage > 0 ? "+" : "";

  return (
    <div className={root()}>
      <Text bold>{ticker}</Text>
      <Text>{getFormatNumber({ number: price })}</Text>
      <Text bold className={changePercentageText({ numType })}>
        {getFormatNumber({
          number: changePercentage,
          decimalPoint: 1,
          prefix,
          postfix: "%",
        })}
      </Text>
    </div>
  );
};

export default FlowStockItem;
