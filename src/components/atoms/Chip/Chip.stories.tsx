import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

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
  render: () => <Chip value="chip1">Select A</Chip>,
};

export const Disabled: Story = {
  render: () => (
    <Chip value="chip1" disabled>
      Select A
    </Chip>
  ),
};

export const ChipGroup: Story = {
  render: () => (
    <Chip.ChipGroup>
      <Chip value="chip1">Select A</Chip>
      <Chip value="chip2">Select B</Chip>
      <Chip value="chip3">Select C</Chip>
      <Chip value="chip4">Select D</Chip>
    </Chip.ChipGroup>
  ),
};

export const DefaultSelected: Story = {
  render: () => (
    <Chip.ChipGroup defaultSelected="chip1">
      <Chip value="chip1">Select A</Chip>
      <Chip value="chip2">Select B</Chip>
      <Chip value="chip3">Select C</Chip>
      <Chip value="chip4">Select D</Chip>
    </Chip.ChipGroup>
  ),
};

export const Variant: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Chip.ChipGroup defaultSelected="chip1">
        <Chip value="chip1">Select A</Chip>
        <Chip value="chip2">Select B</Chip>
        <Chip value="chip3">Select C</Chip>
        <Chip value="chip4">Select D</Chip>
      </Chip.ChipGroup>
      <Chip.ChipGroup defaultSelected="chip1">
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
      </Chip.ChipGroup>
    </StoryWrapper>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <Chip.ChipGroup defaultSelected={["chip1", "chip2"]} multiSelect>
      <Chip value="chip1">Select A</Chip>
      <Chip value="chip2">Select B</Chip>
      <Chip value="chip3">Select C</Chip>
      <Chip value="chip4">Select D</Chip>
    </Chip.ChipGroup>
  ),
};
