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
      <FloatingButton position="absolute">Button</FloatingButton>
    </StoryWrapper>
  ),
};

export const Position: Story = {
  render: () => (
    <StoryWrapper className="relative w-[300px] h-[150px]">
      <FloatingButton position="absolute" top={0} left={0}>
        Button
      </FloatingButton>
      <FloatingButton position="absolute" top={0} right={0}>
        Button
      </FloatingButton>
      <FloatingButton position="absolute" bottom={0} left={0}>
        Button
      </FloatingButton>
      <FloatingButton position="absolute" bottom={0} right={0}>
        Button
      </FloatingButton>
    </StoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <StoryWrapper className="flex h-[100px]">
      <FloatingButton icon={<Icon icon="moon" />} size="s" />
      <FloatingButton icon={<Icon icon="moon" />} size="m" />
      <FloatingButton icon={<Icon icon="moon" />} size="l" />
    </StoryWrapper>
  ),
};

export const IconButton: Story = {
  render: () => (
    <StoryWrapper className="flex w-[400px] h-[100px]">
      <FloatingButton icon={<Icon icon="moon" />} size="l" />
      <FloatingButton icon={<Icon icon="moon" />} size="l">
        Dark Mode
      </FloatingButton>
    </StoryWrapper>
  ),
};
