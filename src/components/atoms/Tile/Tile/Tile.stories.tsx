import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/utils";

import StoryWrapper from "@story/StoryWrapper";

import Tile from "../Tile/Tile";

const meta = {
  title: "Atom/Tile/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: `"div"` },
        type: {
          summary: `"div" |  "main" | "section" | "article" | "header" | "nav" | "aside" | "footer"`,
        },
      },
    },
    ...exceptProperty(["innerRef"]),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  render: () => <Tile>타일 예시</Tile>,
};

/**
 * `renderAs` 속성을 이용해 타일이 렌더링 될 태그를 지정할 수 있습니다.
 *
 * - `div` : div 태그
 * - `main` : main 태그
 * - `article` : article 태그
 * - `section` : section 태그
 * - `header` : header 태그
 * - `nav` : nav 태그
 * - `aside` : aside 태그
 * - `footer` : footer 태그
 *
 * 기본값으로 `div` 태그가 지정되어 있습니다.
 */
export const TileRenderAs: Story = {
  name: "RenderAs",
  render: () => (
    <StoryWrapper direction="vertical">
      <StoryWrapper>
        <Tile renderAs="div">div 타일</Tile>
        <Tile renderAs="main">main 타일</Tile>
        <Tile renderAs="article">article 타일</Tile>
        <Tile renderAs="section">section 타일</Tile>
      </StoryWrapper>
      <StoryWrapper>
        <Tile renderAs="header">header 타일</Tile>
        <Tile renderAs="nav">nav 타일</Tile>
        <Tile renderAs="aside">aside 타일</Tile>
        <Tile renderAs="footer">footer 타일</Tile>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * `variant` 속성을 이용해 타일을 다양한 형태로 사용할 수 있습니다.
 *
 * - `default` : 가장 기본적인 형태의 타일
 * - `primary` : 배경색이 primary인 타일
 * - `secondary` : 배경색이 secondary인 타일
 *
 * 기본값으로 `default`가 설정되어있습니다.
 */
export const TileVariant: Story = {
  name: "Variant",
  render: () => (
    <StoryWrapper>
      <Tile variant="default">타일 예시</Tile>
      <Tile variant="primary">타일 예시</Tile>
      <Tile variant="secondary">타일 예시</Tile>
    </StoryWrapper>
  ),
};

/**
 * `rounded` 속성을 이용해 테두리 반경을 지정할 수 있습니다.
 *
 * - `none` : 없음
 * - `s` : 4px
 * - `m` : 8px
 * - `l` : 16px
 *
 * 기본값으로 `m`가 설정되어있습니다.
 */
export const TileRounded: Story = {
  name: "Rounded",
  render: () => (
    <StoryWrapper>
      <Tile rounded="none">타일 예시</Tile>
      <Tile rounded="s">타일 예시</Tile>
      <Tile rounded="m">타일 예시</Tile>
      <Tile rounded="l">타일 예시</Tile>
    </StoryWrapper>
  ),
};

/**
 * `padding` 속성을 이용해 타일의 padding 값을 지정할 수 있습니다.
 *
 * - `none` : 없음
 * - `3xs` : 2px
 * - `2xs` : 4px
 * - `xs` : 8px
 * - `s` : 12px
 * - `m` : 16px
 * - `l` : 20px
 * - `xl` : 24px
 * - `2xl` : 32px
 * - `3xl` : 40px
 *
 * 기본값으로 `none`가 설정되어있습니다.
 */
export const TilePadding: Story = {
  name: "Padding",
  render: () => (
    <StoryWrapper direction="vertical">
      <StoryWrapper>
        <Tile padding="none">타일 예시</Tile>
        <Tile padding="3xs">타일 예시</Tile>
        <Tile padding="2xs">타일 예시</Tile>
        <Tile padding="xs">타일 예시</Tile>
        <Tile padding="s">타일 예시</Tile>
      </StoryWrapper>
      <StoryWrapper>
        <Tile padding="m">타일 예시</Tile>
        <Tile padding="l">타일 예시</Tile>
        <Tile padding="xl">타일 예시</Tile>
        <Tile padding="2xl">타일 예시</Tile>
        <Tile padding="3xl">타일 예시</Tile>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * `shadow` 속성을 이용해 타일의 그림자를 지정할 수 있습니다.
 *
 * - `none`
 * - `xs`
 * - `s`
 * - `m`
 * - `l`
 * - `xl`
 *
 * 기본값으로 `xs`가 설정되어있습니다.
 */
export const TileShadow: Story = {
  name: "Shadow",
  render: () => (
    <StoryWrapper>
      <Tile shadow="none">타일 예시</Tile>
      <Tile shadow="xs">타일 예시</Tile>
      <Tile shadow="s">타일 예시</Tile>
      <Tile shadow="m">타일 예시</Tile>
      <Tile shadow="l">타일 예시</Tile>
      <Tile shadow="xl">타일 예시</Tile>
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Tile 컴포넌트를 직접 테스트해보세요.
 *
 * [Tile Playground로 이동](?path=/story/atom-tile-tile--playground)
 */
export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["div", "header", "footer", "nav", "aside", "main", "section", "article"],
      control: { type: "select" },
    },
  },
  parameters: { a11y: { disable: true } },
  render: (args) => <Tile {...args}>타일 예시</Tile>,
};
