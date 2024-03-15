import type { Meta, StoryObj } from "@storybook/react";

import FlowStockItem from "./FlowStockItem";

const meta = {
  title: "Molecules/FlowStockItem",
  component: FlowStockItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlowStockItem>;

export default meta;
type Story = StoryObj<typeof FlowStockItem>;

export const Default: Story = {
  render: () => <FlowStockItem ticker="AAPL" price={123456} changePercentage={25} />,
};

export const Zero: Story = {
  render: () => <FlowStockItem ticker="AAPL" price={123456} changePercentage={0} />,
};

export const Negative: Story = {
  render: () => <FlowStockItem ticker="AAPL" price={123456} changePercentage={-25} />,
};
