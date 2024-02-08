import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

import StockPrice from "./StockPrice";

const meta = {
  title: "Molecules/StockPrice",
  component: StockPrice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StockPrice>;

export default meta;
type Story = StoryObj<typeof StockPrice>;

export const Default: Story = {
  render: () => <StockPrice price={1200} />,
};

export const PrefixPostfix: Story = {
  render: () => <StockPrice price={1200} prefix="₩ " postfix="원" />,
};

export const DecimalPoint: Story = {
  render: () => <StockPrice price={1200} decimalPoint={7} />,
};

const AnimatedStockPriceWrapper = () => {
  const [currentPrice, setCurrentPrice] = useState(8123.123);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPrice(Math.random() * 10000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <StockPrice price={currentPrice} prefix="$ " decimalPoint={2} />;
};

export const Animated: Story = {
  // use Wrapeer Component to change price parameter intervally
  render: () => <AnimatedStockPriceWrapper />,
};
