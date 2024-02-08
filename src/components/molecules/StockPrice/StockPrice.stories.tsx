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

const AnimatedStockPriceWrapper = () => {
  const [currentPrice, setCurrentPrice] = useState(8123);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPrice(Math.floor(Math.random() * 10000));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <StockPrice price={currentPrice} />;
};

export const Animated: Story = {
  // use Wrapeer Component to change price parameter intervally
  render: () => <AnimatedStockPriceWrapper />,
};
