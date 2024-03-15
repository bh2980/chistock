import { getFormatNumber } from "@utils/getFormatNumber";

import { MovingNumber } from "./StockPrice";

export const useStockPrice = () => {
  const isNumber = (char: string) => char.match(/[0-9]/);

  const makeString2MovingNumber = (char: string, idx: number) => {
    if (!isNumber(char)) return char;
    return <MovingNumber key={`MovingNumber-${idx}`} number={Number(char)} />;
  };

  const renderAnimatedPrice = (price: number, decimalPoint?: number) => {
    return Array.from(getFormatNumber({ number: price, decimalPoint })).map(
      makeString2MovingNumber
    );
  };

  return {
    makeString2MovingNumber,
    renderAnimatedPrice,
  };
};
