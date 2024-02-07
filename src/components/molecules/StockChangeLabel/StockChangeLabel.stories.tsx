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

export const Increase: Story = {
  render: () => <StockChangeLabel change={8050} changePercentage={29} />,
};

export const Decrease: Story = {
  render: () => <StockChangeLabel change={-8050} changePercentage={-29} />,
};

export const NoChange: Story = {
  render: () => <StockChangeLabel change={0} changePercentage={0} />,
};
