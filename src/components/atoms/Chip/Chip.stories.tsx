import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

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
      <Chip value="chip1">Select A</Chip>
      <Chip value="chip2" disabled>
        Select B
      </Chip>
      <Chip value="chip3">Select C</Chip>
      <Chip value="chip4">Select D</Chip>
    </ChipGroup>
  ),
};

export const Variant: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <ChipGroup defaultSelected="chip1">
        <Chip value="chip1">Select A</Chip>
        <Chip value="chip2">Select B</Chip>
        <Chip value="chip3">Select C</Chip>
        <Chip value="chip4">Select D</Chip>
      </ChipGroup>
      <ChipGroup defaultSelected="chip1">
        <Chip value="chip1" variant="outlined">
          Select A
        </Chip>
        <Chip value="chip2" variant="outlined">
          Select B
        </Chip>
        <Chip value="chip3" variant="outlined">
          Select C
        </Chip>
        <Chip value="chip4" variant="outlined">
          Select D
        </Chip>
      </ChipGroup>
    </StoryWrapper>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <ChipGroup defaultSelected="chip1" multiSelect>
      <Chip value="chip1">Select A</Chip>
      <Chip value="chip2" disabled>
        Select B
      </Chip>
      <Chip value="chip3">Select C</Chip>
      <Chip value="chip4">Select D</Chip>
    </ChipGroup>
  ),
};
