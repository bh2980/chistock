import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/utils";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "@atoms/Icon/Icon";

import FloatingButton from "./FloatingButton";

const meta = {
  title: "Atom/Button/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ...exceptProperty(["onClick", "onMouseEnter", "onTouchStart", "innerRef"]),
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const Default: Story = {
  render: () => (
    <StoryWrapper className="relative w-[100px] h-[100px]">
      <FloatingButton>Button</FloatingButton>
    </StoryWrapper>
  ),
};

export const Position: Story = {
  render: () => (
    <StoryWrapper className="relative w-[300px] h-[150px]">
      <FloatingButton className="top-[0rem] left-[0rem]">Button</FloatingButton>
      <FloatingButton className="top-[0rem] right-[0rem]">Button</FloatingButton>
      <FloatingButton className="bottom-[0rem] left-[0rem]">Button</FloatingButton>
      <FloatingButton className="bottom-[0rem] right-[0rem]">Button</FloatingButton>
    </StoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <StoryWrapper className="flex h-[100px]">
      <FloatingButton icon={<Icon icon="moon" />} size="s" className="relative" />
      <FloatingButton icon={<Icon icon="moon" />} size="m" className="relative" />
      <FloatingButton icon={<Icon icon="moon" />} size="l" className="relative" />
    </StoryWrapper>
  ),
};

export const IconButton: Story = {
  render: () => (
    <StoryWrapper className="flex h-[100px]">
      <FloatingButton icon={<Icon icon="moon" />} size="l" className="relative" />
      <FloatingButton icon={<Icon icon="moon" />} size="l" className="relative">
        Dark Mode
      </FloatingButton>
    </StoryWrapper>
  ),
};
