import { useEffect, useRef } from "react";

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

const StockPrice = ({ price, size, prefix, postfix }: StockPriceProps) => {
  return (
    <span className={stockPriceVariants({ size })}>
      {prefix}
      {Array.from(price.toLocaleString()).map((char, idx) => {
        if (!char.match(/[0-9]/)) return char;
        return <AnimatedNumber key={`AnimatedNumber-${idx}`} number={Number(char)} />;
      })}
      {postfix}
    </span>
  );
};

export default StockPrice;
