import type { Meta, StoryObj } from "@storybook/react";

import Tile from "./Tile";

const meta = {
  title: "Atom/Tile/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
    },
    width: {
      options: ["auto", "full", "desktop-4", "desktop-8", "desktop-12"],
      control: { type: "radio" },
    },
    borderRadius: {
      options: ["none", "xs", "s", "m", "l"],
      control: { type: "radio" },
    },
    padding: {
      options: ["none", "3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl"],
      control: { type: "radio" },
    },
    shadow: {
      options: ["none", "xs", "s", "m", "l", "xl"],
      control: { type: "radio" },
    },
  },
  args: {
    backgroundColor: "default",
    width: "desktop-4",
    borderRadius: "m",
    padding: "2xl",
    shadow: "xs",
    className: "h-[256rem]",
  },
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  render: (args) => <Tile {...args}>타일 예시</Tile>,
};
