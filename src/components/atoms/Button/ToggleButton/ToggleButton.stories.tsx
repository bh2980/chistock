import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "@atoms/Icon/Icon";

import ToggleButton from "./ToggleButton";

const meta = {
  title: "Atom/Button/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: () => <ToggleButton>Button</ToggleButton>,
};

export const PresseState: Story = {
  render: () => (
    <StoryWrapper className="flex flex-col">
      <StoryWrapper>
        <ToggleButton variant="primary">
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="error">
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="text">
          <Icon icon="moon" />
          Button
        </ToggleButton>
      </StoryWrapper>
      <StoryWrapper>
        <ToggleButton variant="primary" pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="error" pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="text" pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
      </StoryWrapper>
    </StoryWrapper>
  ),
};
