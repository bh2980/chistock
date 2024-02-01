import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Label from "./Label";

const meta = {
  title: "Atom/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label>Label</Label>,
};

export const Variant: Story = {
  render: () => (
    <StoryWrapper className="flex flex-col">
      <StoryWrapper>
        <Label>Label</Label>
        <Label variant="primaryContainer">Label</Label>
      </StoryWrapper>
      <StoryWrapper>
        <Label variant="secondary">Label</Label>
        <Label variant="secondaryContainer">Label</Label>
      </StoryWrapper>
      <StoryWrapper>
        <Label variant="error">Label</Label>
        <Label variant="errorContainer">Label</Label>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

export const Size: Story = {
  render: () => (
    <StoryWrapper>
      <Label size="xs">Label</Label>
      <Label size="s">Label</Label>
      <Label>Label</Label>
    </StoryWrapper>
  ),
};
