import type { Meta, StoryObj } from "@storybook/react";

import Chip, { ChipGroup } from "./Chip";

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
  render: () => (
    <ChipGroup defaultSelected="chip1">
      <Chip value="chip1">Chip</Chip>
      <Chip value="chip2">Chip</Chip>
      <Chip value="chip3">Chip</Chip>
      <Chip value="chip4">Chip</Chip>
    </ChipGroup>
  ),
};
