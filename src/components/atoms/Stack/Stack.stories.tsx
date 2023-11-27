import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/utils";

import StoryWrapper from "@story/StoryWrapper";

import Tile from "@atoms/Tile/Tile";

import Stack from "./Stack";

const meta = {
  title: "Atom/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: `"div"` },
        type: {
          summary: `"main" | "article" | "section"`,
        },
      },
    },
    ...exceptProperty(["innerRef"]),
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack>
      <Tile padding="s">item1</Tile>
      <Tile padding="s">item2</Tile>
      <Tile padding="s">item3</Tile>
    </Stack>
  ),
};

export const HorizontalStack: Story = {
  render: () => (
    <Stack direction="row">
      <Tile padding="s">item1</Tile>
      <Tile padding="s">item2</Tile>
      <Tile padding="s">item3</Tile>
    </Stack>
  ),
};

export const StackGap: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <Stack direction="row" gap="m">
        <Tile padding="s">item1</Tile>
        <Tile padding="s">item2</Tile>
        <Tile padding="s">item3</Tile>
      </Stack>
      <Stack direction="row" gap="2xl">
        <Tile padding="s">item1</Tile>
        <Tile padding="s">item2</Tile>
        <Tile padding="s">item3</Tile>
      </Stack>
    </StoryWrapper>
  ),
};
