import { useEffect, useRef } from "react";

import Text from "@atoms/Text";

import { StockPriceProps } from "./Stock.types";
import { stockPriceVariants } from "./StockPrice.styles";
import { useStockPrice } from "./useStockPrice";

export const MovingNumber = ({ number }: { number: number }) => {
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

const StockPrice = ({
  size,
  color,
  price,
  prefix,
  postfix,
  decimalPoint = 0,
  ...props
}: StockPriceProps) => {
  const { renderAnimatedPrice } = useStockPrice();

  return (
    <Text className={stockPriceVariants({ size, color })} {...props}>
      {prefix}
      {renderAnimatedPrice(price, decimalPoint)}
      {postfix}
    </Text>
  );
};

export default StockPrice;
