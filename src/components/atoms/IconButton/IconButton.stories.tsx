import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";
import ICON_MAP from "@constants/iconMap";

const meta = {
  title: "Atom/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: "radio" },
    },
    variant: {
      options: ["primary", "secondary", "danger", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["s", "m", "l"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  args: {
    icon: "Add",
    variant: "primary",
    size: "m",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const ButtonTag: Story = {
  render: (args) => <IconButton {...args}>LABEL</IconButton>,
};
