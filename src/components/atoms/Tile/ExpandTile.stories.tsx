import type { Meta, StoryObj } from "@storybook/react";

import ExpandTile from "./ExpandTile";
import Text from "@atoms/Text/Text";

const meta = {
  title: "Atom/Tile/ExpandTile",
  component: ExpandTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
    width: "desktop-4",
    borderRadius: "m",
    padding: "2xl",
    shadow: "xs",
    shrinkHeight: "h-[256rem]",
  },
} satisfies Meta<typeof ExpandTile>;

export default meta;
type Story = StoryObj<typeof ExpandTile>;

export const Default: Story = {
  render: (args) => (
    <ExpandTile {...args}>
      <div className="flex flex-col gap-xs">
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
        <div className="flex justify-between">
          <Text>제목</Text>
          <Text>본문</Text>
        </div>
      </div>
    </ExpandTile>
  ),
};
