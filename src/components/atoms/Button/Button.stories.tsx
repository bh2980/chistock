import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import Icon from "@atoms/Icon/Icon";
import Text from "@atoms/Text/Text";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "text"],
      control: { type: "radio" },
    },
    size: {
      options: ["s", "m", "l"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
  args: {
    variant: "primary",
    size: "m",
    disabled: false,
    className: "",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonTag: Story = {
  render: (args) => <Button {...args}>LABEL</Button>,
};

export const IconTextBtn: Story = {
  render: (args) => (
    <Button {...args}>
      <Icon icon="Add" />
      Add Wishlist
    </Button>
  ),
};

export const TextIconBtn: Story = {
  render: (args) => (
    <Button {...args}>
      Add Wishlist
      <Icon icon="Add" />
    </Button>
  ),
};

export const TextIconBtnWithClasses: Story = {
  args: { className: "w-desktop-4 uppercase" },
  render: (args) => (
    <Button {...args}>
      Add Wishlist
      <Icon icon="Add" />
    </Button>
  ),
};

export const IconBtn: Story = {
  render: (args) => (
    <Button {...args}>
      <Icon icon="Add" />
    </Button>
  ),
};

export const ATagBtn: Story = {
  args: {
    as: "a",
    href: "https://www.naver.com",
  },
  render: (args) => (
    <Button {...args}>
      <Text>GO TO NAVER</Text>
    </Button>
  ),
};
