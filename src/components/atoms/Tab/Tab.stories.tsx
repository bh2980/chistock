import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";

const meta = {
  title: "Atom/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => <Tab />,
};
