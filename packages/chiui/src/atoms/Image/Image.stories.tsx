import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";

const meta = {
  title: "Atom/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rounded: {
      options: ["none", "xs", "s", "m", "l", "circle"],
      control: { type: "radio" },
    },
  },
  args: {
    className: "h-[160rem]",
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbixMVD%2FbtsnzFZlqlV%2FJiuZ2EpykdTd37Kljphibk%2Fimg.png",
    alt: "react component",
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => <Image {...args} />,
};
