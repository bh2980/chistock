import type { Meta, StoryObj } from "@storybook/react";

import Box from "./Box";

const meta = {
  title: "Atom/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: (args) => (
    <Box className="border-dashed border p-xl" {...args}>
      Box
    </Box>
  ),
};

export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["div", "button", "u", "li", "em", "strong"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <Box className="border-dashed border p-xl" {...args}>
      {args.renderAs || "div"} 태그
    </Box>
  ),
};
