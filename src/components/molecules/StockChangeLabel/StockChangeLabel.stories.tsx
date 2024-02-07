import type { Meta, StoryObj } from "@storybook/react";

import StockChangeLabel from "./StockChangeLabel";

const meta = {
  title: "Molecules/StockChangeLabel",
  component: StockChangeLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args, { loaded: { change } }) => <StockChangeLabel {...args} {...change} />,
} satisfies Meta<typeof StockChangeLabel>;

export default meta;
type Story = StoryObj<typeof StockChangeLabel>;

export const Default: Story = {
  render: () => <StockChangeLabel change={1.75} changePercentage={0.24} />,
};

export const Decrease: Story = {
  render: () => <StockChangeLabel change={-1.75} changePercentage={-0.24} />,
};
