import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/exceptProperty";

import StoryWrapper from "@story/StoryWrapper";

import Text from "@atoms/Text/Text";

import ExpandTile from "../ExpandTile/ExpandTile";

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
    <ExpandTile className="w-[200rem] max-h-[256rem]">
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};

export const Expanded: Story = {
  render: () => (
    <ExpandTile className="w-[200rem] max-h-[256rem]" expanded>
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};

/**
 * `max-h-` class를 통해 확장 전 타일의 길이를 지정할 수 있습니다.
 *
 * **필수적으로 지정해야하는 속성**입니다.
 */
export const ExpandTileCollapseHeight: Story = {
  name: "CollapseHeight",
  render: () => (
    <StoryWrapper>
      <ExpandTile className="w-[200rem] max-h-[160rem]">
        <ExpaneTileChildren />
      </ExpandTile>
      <ExpandTile className="w-[200rem] max-h-[256rem]">
        <ExpaneTileChildren />
      </ExpandTile>
    </StoryWrapper>
  ),
};

export const HideWithGradient: Story = {
  render: () => (
    <ExpandTile className="w-[200rem] max-h-[256rem]" hideWithGradient>
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};

export const ChangeButtonText: Story = {
  render: () => (
    <ExpandTile className="w-[200rem] max-h-[256rem]" closeText="close" expandText="more">
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};
/**
 * Playground에서 Expand Tile 컴포넌트를 직접 테스트해보세요.
 *
 * [Expand Tile Playground로 이동](?path=/story/atom-tile-expandtile--playground)
 */
export const Playground: Story = {
  args: {
    className: "w-[200rem] max-h-[256rem]",
  },
  argTypes: {
    renderAs: {
      options: ["div", "header", "footer", "nav", "aside", "main", "section", "article"],
      control: { type: "select" },
    },
  },
  parameters: { a11y: { disable: true } },
  render: (args) => (
    <ExpandTile {...args}>
      <ExpaneTileChildren />
    </ExpandTile>
  ),
};
