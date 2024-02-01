import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./Chip";

const meta = {
  title: "Atom/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: () => <Chip />,
};
