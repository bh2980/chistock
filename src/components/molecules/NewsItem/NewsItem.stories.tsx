import type { Meta, StoryObj } from "@storybook/react";

import NewsItem from "./NewsItem";

const meta = {
  title: "Molecules/NewsItem",
  component: NewsItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewsItem>;

export default meta;
type Story = StoryObj<typeof NewsItem>;

const dummyData = {
  category: "business",
  source: "Routre",
  timestamp: Date.now(),
  title:
    "‘YOLO’ spenders are propping up the economy spenders are propping up the economy spenders are propping up the economy",
  summary:
    "There is one catalyst that could shake the current slow-paced bull market into a faster-paced that could shake the current slow-paced bull market into a faster-paced that could shake the current slow-paced bull market into a faster-paced",
};

export const Default: Story = {
  args: dummyData,
  render: (args) => <NewsItem {...args} />,
};
