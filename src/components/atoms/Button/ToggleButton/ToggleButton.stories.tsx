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
        <ToggleButton>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton isIconButton>
          <Icon icon="moon" />
        </ToggleButton>
        <ToggleButton pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton isIconButton pressed={true}>
          <Icon icon="moon" />
        </ToggleButton>
      </StoryWrapper>
      <StoryWrapper>
        <ToggleButton variant="ghost">
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="ghost" isIconButton>
          <Icon icon="moon" />
        </ToggleButton>
        <ToggleButton variant="ghost" pressed={true}>
          <Icon icon="moon" />
          Button
        </ToggleButton>
        <ToggleButton variant="ghost" isIconButton pressed={true}>
          <Icon icon="moon" />
        </ToggleButton>
      </StoryWrapper>
    </StoryWrapper>
  ),
};
