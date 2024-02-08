import { MovingNumber } from "./StockPrice";

export const useStockPrice = () => {
  const isNumber = (char: string) => char.match(/[0-9]/);

  const makeFormatPrice = (price: number, decimalPoint: number) => {
    const underDecimalPoint = (price % 1).toFixed(decimalPoint).replace("0.", "");
    const formatInteger = Math.floor(price).toLocaleString();

    return decimalPoint > 0 ? `${formatInteger}.${underDecimalPoint}` : formatInteger;
  };

  const makeString2MovingNumber = (char: string, idx: number) => {
    if (!isNumber(char)) return char;
    return <MovingNumber key={`MovingNumber-${idx}`} number={Number(char)} />;
  };

  const renderAnimatedPrice = (price: number, decimalPoint: number) => {
    return Array.from(makeFormatPrice(price, decimalPoint)).map(makeString2MovingNumber);
  };

  return {
    makeFormatPrice,
    makeString2MovingNumber,
    renderAnimatedPrice,
  };
};
