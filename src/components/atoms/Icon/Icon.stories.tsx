import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "./Icon";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: "sun",
  },
  render: (args) => (
    <div className="text-[56rem]">
      <Icon {...args} />
    </div>
  ),
};

/** Icon 종류를 설정합니다. */
export const IconCategory: Story = {
  render: () => (
    <StoryWrapper className="text-[56rem]" direction="vertical">
      <StoryWrapper>
        <Icon icon="arrow-path" />
        <Icon icon="chevron-down" />
        <Icon icon="chevron-up" />
        <Icon icon="exclamation-circle" />
      </StoryWrapper>
      <StoryWrapper>
        <Icon icon="moon" />
        <Icon icon="sun" />
        <Icon icon="search" />
        <Icon icon="setting" />
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * Icon은 아래 6가지의 크기를 가집니다.
 *
 * - `inherit` : 부모 컴포넌트의 text 크기를 상속받습니다.
 * - `s` : 12px
 * - `m` : 16px
 * - `l` : 20px
 * - `xl` : 24px
 * - `2xl` : 32px
 * - `3xl` : 40px
 *
 * 기본값은 `inherit`으로 지정되어 있습니다.
 */
export const IconSize: Story = {
  render: () => (
    <StoryWrapper className="text-[56rem]" direction="vertical">
      <Icon icon="sun" />
      <StoryWrapper>
        <Icon icon="sun" size="s" />
        <Icon icon="sun" size="m" />
        <Icon icon="sun" size="l" />
        <Icon icon="sun" size="xl" />
        <Icon icon="sun" size="2xl" />
        <Icon icon="sun" size="3xl" />
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * Icon은 색상 26가지의 색상을 가지며, 이는 Text 컴포넌트의 색상과 동일합니다.
 *
 * - `inherit`: 부모 컴포넌트의 text 색상을 상속받습니다.
 * - `transparent`: 부모 컴포넌트의 text 색상을 상속받습니다.
 *
 *
 * - `onSurface` : surface 위 컨텐츠 색
 * - `onSurfaceVariant` : surface 위 컨텐츠 색 2
 *
 *
 * - `유채색`
 * - `유채색 위 컨텐츠 색(On)`
 */
export const IconColor: Story = {
  render: () => (
    <StoryWrapper className="text-[56rem]" direction="vertical">
      <StoryWrapper>
        <Icon icon="sun" />
        <Icon icon="sun" color="transparent" />
      </StoryWrapper>
      <StoryWrapper>
        <Icon icon="sun" className="bg-surface rounded-circle" color="onSurface" />
        <Icon icon="sun" className="bg-surface rounded-circle" color="onSurfaceVariant" />
      </StoryWrapper>
      <StoryWrapper>
        <Icon icon="sun" className="bg-primary rounded-circle" color="onPrimary" />
        <Icon
          icon="sun"
          className="bg-primary-container rounded-circle"
          color="onPrimaryContainer"
        />
      </StoryWrapper>
      <StoryWrapper>
        <Icon icon="sun" className="bg-secondary rounded-circle" color="onSecondary" />
        <Icon
          icon="sun"
          className="bg-secondary-container rounded-circle"
          color="onSecondaryContainer"
        />
      </StoryWrapper>
      <StoryWrapper>
        <Icon icon="sun" className="bg-error rounded-circle" color="onError" />
        <Icon icon="sun" className="bg-error-container rounded-circle" color="onErrorContainer" />
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Icon 컴포넌트를 직접 테스트해보세요.
 *
 * [Icon Playground로 이동](?path=/story/atom-icon--playground)
 */
export const Playground: Story = {
  args: {
    icon: "sun",
  },
  parameters: { a11y: { disable: true } },
  render: (args) => (
    <div className="text-[56rem]">
      <Icon {...args} />
    </div>
  ),
};
