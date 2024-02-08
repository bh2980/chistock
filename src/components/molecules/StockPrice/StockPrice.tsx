import { useEffect, useRef } from "react";

const AnimatedNumber = ({ number }: { number: number }) => {
  const numberContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberContainerRef?.current) return;

    numberContainerRef.current.style.transform = `translateY(-${number * 28}rem)`;
  }, [number]);

  return (
    <span className="inline-block text-l text-center h-[28rem] overflow-hidden">
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
    </span>
  );
};

const StockPrice = ({ price }: { price: number }) => {
  return (
    <span>
      {Array.from(String(price), (e) => Number(e)).map((num, idx) => {
        return <AnimatedNumber key={`AnimatedNumber-${idx}`} number={num} />;
      })}
    </span>
  );
};

export default StockPrice;
