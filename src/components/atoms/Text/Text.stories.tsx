import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/exceptProperty";

import StoryWrapper from "@story/StoryWrapper";

import Text from "./Text";

const meta = {
  title: "Atom/Text",
  component: Text,
  parameters: {
    layout: "centered",
    a11y: { disable: true },
  },
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: `"span"` },
        type: {
          summary: `"div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a" | "next/Link"`,
        },
      },
    },
    ...exceptProperty(["onMouseEnter", "onTouchStart", "onClick", "innerRef"]),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <StoryWrapper>
      <Text size="headline1">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
    </StoryWrapper>
  ),
};

/**
 * `size` 속성을 이용해 텍스트의 크기를 조절할 수 있습니다.
 *
 * - `inherit` : 부모의 텍스트 크기 상속
 * - `healind1` : 32px / 48px
 * - `headline2` : 24px / 36px
 * - `headline3` : 20px / 32px
 * - `body1` : 16px / 24px
 * - `body2` : 14px / 20px
 * - `body3` : 12px / 20px
 *
 * 기본값은 `inherit`으로 설정되어있습니다.
 */
export const TextSize: Story = {
  name: "Size",
  render: () => (
    <StoryWrapper className="text-[48px]" direction="vertical">
      <Text>가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="body3">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="body2">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="body1">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="headline3">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="headline2">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text size="headline1">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
    </StoryWrapper>
  ),
};

/**
 * - `bold` : 굵은 굵기
 */
export const TextWeight: Story = {
  name: "Weight",
  render: () => (
    <StoryWrapper className="text-headline1" direction="vertical">
      <Text>가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      <Text bold>가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
    </StoryWrapper>
  ),
};

/**
 * color 속성을 이용하여 텍스트의 색상을 설정할 수 있습니다.
 *
 * 색상 26가지의 색상을 가집니다.
 * 가시성을 위해 콘텐츠 색(On) 밑에는 배경이 설정되어 있습니다.
 *
 *
 * - `inherit`: 부모 컴포넌트의 텍스트 색 상속
 * - `transparent`: 투명색
 *
 *
 * - `onSurface` : surface 위 콘텐츠 색
 * - `onSurfaceVariant` : surface 위 콘텐츠 색 변형
 *
 *
 * - `유채색`
 * - `유채색 위 콘텐츠 색(On)`
 *
 * 더 자세한 색상 정보는 [Color 문서](?path=/docs/token-color--docs)를 참조하세요.
 */
export const TextColor: Story = {
  name: "Color",
  render: () => (
    <StoryWrapper className="text-headline2" direction="vertical">
      <StoryWrapper>
        <Text color="inherit">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
        <Text color="transparent">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
      </StoryWrapper>
      <StoryWrapper>
        <Text color="onSurface" className="bg-surface">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
        <Text color="onSurfaceVariant" className="bg-surface">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
      </StoryWrapper>
      <StoryWrapper>
        <Text color="primary">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
        <Text color="onPrimary" className="bg-primary">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
        <Text color="onPrimaryContainer" className="bg-primary-container">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
      </StoryWrapper>
      <StoryWrapper>
        <Text color="secondary">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
        <Text color="onSecondary" className="bg-secondary">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
        <Text color="onSecondaryContainer" className="bg-secondary-container">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
      </StoryWrapper>
      <StoryWrapper>
        <Text color="error">가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
        <Text color="onError" className="bg-error">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
        <Text color="onErrorContainer" className="bg-error-container">
          가느다란 몸 부수어 쥔 총칼, 터, 평화
        </Text>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Text 컴포넌트를 직접 테스트해보세요.
 *
 * [Text Playground로 이동](?path=/story/atom-text--playground)
 */
export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["span", "div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "a"],
    },
  },
  render: (args) => (
    <StoryWrapper className="text-[48px]" direction="vertical">
      <Text {...args}>가느다란 몸 부수어 쥔 총칼, 터, 평화</Text>
    </StoryWrapper>
  ),
};
