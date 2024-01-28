import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "@atoms/Icon/Icon";

import TextField from "./TextField";

const meta = {
  title: "Atom/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <StoryWrapper>
      <TextField label="Label" placeholder="대체 텍스트" helperText="부가 텍스트" />
    </StoryWrapper>
  ),
};

export const Label: Story = {
  render: () => (
    <StoryWrapper>
      <TextField label="Label" />
      <TextField title="타이틀" />
    </StoryWrapper>
  ),
};

export const HelperText: Story = {
  render: () => (
    <StoryWrapper>
      <TextField label="Label" helperText="부가 텍스트" />
    </StoryWrapper>
  ),
};

export const Required: Story = {
  render: () => (
    <StoryWrapper>
      <TextField label="Label" required />
    </StoryWrapper>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <StoryWrapper className="flex flex-col w-[500px] bg-surface rounded-m">
      <TextField title="title" />
      <TextField title="title" fullWidth />
    </StoryWrapper>
  ),
};

export const IconTextField: Story = {
  render: () => {
    return (
      <StoryWrapper>
        <TextField
          label="Label"
          leadingIcon={<Icon icon="moon" />}
          trailingIcon={<Icon icon="sun" />}
        />
        <TextField
          title="타이틀"
          leadingIcon={<Icon icon="moon" />}
          trailingIcon={<Icon icon="sun" />}
        />
      </StoryWrapper>
    );
  },
};

export const State: Story = {
  render: () => (
    <StoryWrapper className="flex flex-col">
      <StoryWrapper>
        <TextField label="Enabled" />
        <TextField title="Enabled" />
      </StoryWrapper>
      <StoryWrapper>
        <TextField label="Disabled" disabled />
        <TextField title="Disabled" disabled />
      </StoryWrapper>
      <StoryWrapper>
        <TextField label="readOnly" value="본문 텍스트" readOnly />
        <TextField title="readOnly" value="본문 텍스트" readOnly />
      </StoryWrapper>
      <StoryWrapper>
        <TextField label="Error" error />
        <TextField title="Error" error />
      </StoryWrapper>
    </StoryWrapper>
  ),
};
