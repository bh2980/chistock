import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import ICON_MAP from "@constants/iconMap";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: "radio" },
    },
    color: {
      options: [
        "current",
        "primary",
        "primaryFixed",
        "secondary",
        "secondaryFixed",
        "tertiary",
        "tertiaryFixed",
        "red",
        "yellow",
        "green",
        "magenta",
        "onSurface",
        "onSub",
        "onPrimary",
        "onPrimaryFixed",
        "onSecondary",
        "onSecondaryFixed",
        "onTertiary",
        "onTertiaryFixed",
        "onRed",
        "onRedSub",
        "onYellow",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["inherit", "s", "m", "l", "xl", "2xl", "3xl"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Add: Story = {
  args: {
    icon: "Add",
    color: "current",
    size: "inherit",
  },
  render: (args) => (
    <div className="text-[#f58f00] text-[120rem]">
      <Icon {...args} />
    </div>
  ),
};
