import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/exceptProperty";

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

/**
 * `variant` 속성을 이용해 버튼을 다양한 형태로 사용할 수 있습니다.
 *
 * - `primary` : 페이지 상에서 핵심적인 동작에 사용합니다.
 * - `text` : 우선순위가 낮거나 글씨만 보여져야하는 버튼에서 사용합니다.
 *
 * 기본값으로 `text`가 설정되어있습니다.
 */
export const ButtonVariant: Story = {
  name: "Variant",
  render: () => (
    <StoryWrapper>
      <FloatingButton className="relative">Button</FloatingButton>
      <FloatingButton variant="primaryContainer" className="relative">
        Button
      </FloatingButton>
      <FloatingButton variant="secondary" className="relative">
        Button
      </FloatingButton>
      <FloatingButton variant="secondaryContainer" className="relative">
        Button
      </FloatingButton>
    </StoryWrapper>
  ),
};

export const Position: Story = {
  render: () => (
    <StoryWrapper className="relative w-[300px] h-[150px]">
      <FloatingButton className="top-0 left-0">Button</FloatingButton>
      <FloatingButton className="top-0 right-0">Button</FloatingButton>
      <FloatingButton className="bottom-0 left-0">Button</FloatingButton>
      <FloatingButton className="bottom-0 right-0">Button</FloatingButton>
    </StoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <StoryWrapper className="flex h-[100px]">
      <FloatingButton className="relative" size="s" isIconButton label="다크 모드">
        <Icon icon="moon" />
      </FloatingButton>
      <FloatingButton className="relative" size="m" isIconButton label="다크 모드">
        <Icon icon="moon" />
      </FloatingButton>
      <FloatingButton className="relative" size="l" isIconButton label="다크 모드">
        <Icon icon="moon" />
      </FloatingButton>
    </StoryWrapper>
  ),
};

export const IconButton: Story = {
  render: () => (
    <StoryWrapper className="flex h-[100px]">
      <FloatingButton className="relative" label="다크 모드" isIconButton>
        <Icon icon="moon" />
      </FloatingButton>
      <FloatingButton className="relative">
        <Icon icon="moon" />
        Dark Mode
      </FloatingButton>
    </StoryWrapper>
  ),
};
