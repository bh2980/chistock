import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Divider from "./Divider";

const meta = {
  title: "Atom/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    a11y: { disable: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    className: "w-[200rem]",
  },
  render: (args) => <Divider {...args} />,
};

/**
 * Divider는 `w-` 혹은 `h-` class를 통해 길이를 지정할 수 있습니다.
 *
 * 이 속성은 필수 속성으로 tailwind class의 형태로 값을 받습니다.
 *
 */
export const DividerLength: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider className="w-[200rem]" />
      <Divider className="w-[400rem]" />
      <Divider className="w-[800rem]" />
    </StoryWrapper>
  ),
};

/** Divider는 방향을 의미하는 direction 속성을 가집니다.
 * - `horizontal` : 가로 방향
 * - `vertical` : 세로 방향
 *
 * 기본값으로 `horizontal`이 설정되어 있습니다. */
export const DividerDirection: Story = {
  render: () => (
    <StoryWrapper>
      <Divider className="w-[200rem]" />
      <Divider direction="vertical" className="h-[200rem]" />
    </StoryWrapper>
  ),
};

/** Divider는 굵기를 의미하는 thickness 속성을 가집니다.
 *
 * - `s` : 1px
 * - `m` : 3px
 *
 * 기본값으로 `m`이 설정되어 있습니다.
 */
export const DividerThickness: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider className="w-[200rem]" thickness="s" />
      <Divider className="w-[200rem]" />
    </StoryWrapper>
  ),
};

/** Divider는 색상 값으로 color 속성을 가집니다.
 *
 * - `outline` : surface 색상과 4.5의 명암비를 이루는 색상
 * - `outlineVariant` : surface 색상과 4.5의 명암비를 충족하지 못하는 색상 색상
 *
 * 기본값으로 `outlineVariant`이 설정되어 있습니다.
 */
export const DividerColor: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider className="w-[200rem]" />
      <Divider className="w-[200rem]" color="outline" />
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Divider 컴포넌트를 직접 테스트해보세요.
 *
 * [Divider Playground로 이동](?path=/story/atom-divider--playground)
 */
export const Playground: Story = {
  args: {
    className: "w-[200rem]",
  },
  render: (args) => (
    <StoryWrapper direction="vertical">
      <Divider {...args} />
    </StoryWrapper>
  ),
};
