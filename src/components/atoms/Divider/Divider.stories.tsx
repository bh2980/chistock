import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta = {
  title: "Atom/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    thickness: {
      options: ["s", "m"],
      control: { type: "radio" },
    },
    color: {
      options: ["outline", "outlineVariant"],
      control: { type: "radio" },
    },
  },
  args: {
    direction: "horizontal",
    thickness: "s",
    color: "outline",
    className: "w-[720rem] h-[720rem]",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => <Divider {...args} />,
};
