import { useEffect, useRef } from "react";

import Text from "@atoms/Text";

import { StockPriceProps } from "./Stock.types";
import { stockPriceVariants } from "./StockPrice.styles";

const AnimatedNumber = ({ number }: { number: number }) => {
  const numberContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberContainerRef?.current) return;

    const { height } = numberContainerRef.current.getBoundingClientRect();

    numberContainerRef.current.style.transform = `translateY(-${number * height}rem)`;
  }, [number]);

  return (
    <div className="transition-all" ref={numberContainerRef}>
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  );
};

const StockPrice = ({ price, size, color, prefix, postfix, decimalPoint = 0 }: StockPriceProps) => {
  const makeFormatPrice = (price: number) => {
    const underDecimalPoint = (price % 1).toFixed(decimalPoint).replace("0.", "");
    const formatInteger = Math.floor(price).toLocaleString();

    return decimalPoint > 0 ? `${formatInteger}.${underDecimalPoint}` : formatInteger;
  };

  const isNumber = (char: string) => char.match(/[0-9]/);

  const makeAnimatedNumber = (char: string, idx: number) => {
    if (!isNumber(char)) return char;
    return <AnimatedNumber key={`AnimatedNumber-${idx}`} number={Number(char)} />;
  };

  return (
    <Text className={stockPriceVariants({ size, color })}>
      {prefix}
      {Array.from(makeFormatPrice(price)).map(makeAnimatedNumber)}
      {postfix}
    </Text>
  );
};

export default StockPrice;
