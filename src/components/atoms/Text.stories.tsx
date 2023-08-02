import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "Atom/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: [
        "onDefault",
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
      options: ["xs", "s", "m", "l", "xl", "2xl"],
      control: { type: "radio" },
    },
    weight: {
      options: ["regular", "bold"],
      control: { type: "radio" },
    },
  },
  args: {
    color: "onDefault",
    size: "m",
    weight: "regular",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args}>텍스트 예시</Text>,
};

export const H1: Story = {
  args: {
    as: "h1",
  },
  render: (args) => <Text {...args}>텍스트 예시</Text>,
};
