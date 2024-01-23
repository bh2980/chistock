import type { Meta, StoryObj } from "@storybook/react";

import Slot from "./Slot";

const meta = {
  title: "Atom/Slot",
  component: Slot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: "div" },
      },
    },
  },
} satisfies Meta<typeof Slot>;

export default meta;
type Story = StoryObj<typeof Slot>;

export const Default: Story = {
  render: (args) => (
    <Slot className="border-dashed border p-xl" {...args}>
      Slot
    </Slot>
  ),
};

/**
 * Playground에서 Slot 컴포넌트를 직접 테스트해보세요.
 *
 * [Slot Playground로 이동](?path=/story/atom-slot--playground)
 */
export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["div", "button", "u", "li", "em", "strong"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <Slot className="border-dashed border p-xl" {...args}>
      {args.renderAs || "div"} 태그
    </Slot>
  ),
};
