import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Divider from "./Divider";

const meta = {
  title: "Atom/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    length: 100,
  },
  render: (args) => <Divider {...args} />,
};

/**
 * Divider는 구분선의 길이을 지정할 수 있는 length 속성을 가집니다.
 *
 * 이 속성은 필수 속성으로 tailwind class의 형태로 값을 받습니다.
 *
 */
export const DividerLength: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider length={200} />
      <Divider length={400} />
      <Divider length={800} />
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
      <Divider length={200} />
      <Divider direction="vertical" length={200} />
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
export const DividerWidth: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider length={200} thickness="s" />
      <Divider length={200} />
    </StoryWrapper>
  ),
};

/** Divider는 색상 값으로 color 속성을 가집니다.
 *
 * - `outline` : 명확하게 구분되는 색상
 * - `outlineVariant` : 명확하게 구분되지 않거나 필요에 따라 사용하는 색상
 *
 * 기본값으로 `outline`이 설정되어 있습니다.
 */
export const DividerColor: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Divider length={200} />
      <Divider length={200} color="outlineVariant" />
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
    length: 200,
  },
  render: (args) => (
    <StoryWrapper direction="vertical">
      <Divider {...args} />
    </StoryWrapper>
  ),
};
