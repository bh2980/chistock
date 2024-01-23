import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/utils";

import StoryWrapper from "@story/StoryWrapper";

import Text from "@atoms/Text/Text";

import ExpandTile from "./ExpandTile";

const meta = {
  title: "Atom/Tile/ExpandTile",
  component: ExpandTile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: `"div"` },
      },
    },
    ...exceptProperty(["innerRef"]),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExpandTile>;

export default meta;
type Story = StoryObj<typeof ExpandTile>;

const ExpaneTileChildren = () => {
  return (
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
    </div>
  );
};

/**
 * ExpandTile은 Tile을 확장하여 만든 컴포넌트로 대부분의 속성을 Tile과 공유합니다.
 *
 * 하단에 나오지 않은 속성에 대한 설명은 Tile 컴포넌트를 참조하세요.
 *
 * [Tile 컴포넌트 가기](?path=/docs/atom-tile-tile--docs)
 */
export const Default: Story = {
  render: () => (
    <ExpandTile width={200} collapseHeight={256}>
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};

/**
 * `collapseHeight` 속성을 통해 확장 전 타일의 길이를 지정할 수 있습니다.
 *
 * **필수적으로 지정해야하는 속성**입니다.
 */
export const ExpandTileCollapseHeight: Story = {
  name: "CollapseHeight",
  render: () => (
    <StoryWrapper>
      <ExpandTile width={200} collapseHeight={160}>
        <ExpaneTileChildren />
      </ExpandTile>
      <ExpandTile width={200} collapseHeight={256}>
        <ExpaneTileChildren />
      </ExpandTile>
    </StoryWrapper>
  ),
};

/**
 * `expandHeight` 속성을 통해 확장 전 타일의 길이를 지정할 수 있습니다.
 *
 * 기본값으로 `max-h-screen`이 지정되어 있습니다.
 */
export const ExpandTileExpandHeight: Story = {
  name: "ExpandHeight",
  render: () => (
    <StoryWrapper>
      <ExpandTile width={200} collapseHeight={256} expandHeight={320}>
        <ExpaneTileChildren />
      </ExpandTile>
      <ExpandTile width={200} collapseHeight={256}>
        <ExpaneTileChildren />
      </ExpandTile>
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Expand Tile 컴포넌트를 직접 테스트해보세요.
 *
 * [Expand Tile Playground로 이동](?path=/story/atom-tile-expandtile--playground)
 */
export const Playground: Story = {
  args: {
    width: 400,
    collapseHeight: 200,
  },
  argTypes: {
    renderAs: {
      options: ["div", "header", "footer", "nav", "aside", "main", "section", "article"],
      control: { type: "select" },
    },
    expandHeight: {
      control: { type: "number" },
    },
  },
  render: (args) => (
    <ExpandTile {...args}>
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};
