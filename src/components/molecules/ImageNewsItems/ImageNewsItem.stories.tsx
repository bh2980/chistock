import type { Meta, StoryObj } from "@storybook/react";

import ImageNewsItem from "./ImageNewsItem";

const meta = {
  title: "Molecules/ImageNewsItem",
  component: ImageNewsItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageNewsItem>;

export default meta;
type Story = StoryObj<typeof ImageNewsItem>;

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

const dummyData = {
  src: IMAGE_URL,
  category: "business",
  source: "Routre",
  timestamp: Date.now(),
  title:
    "‘YOLO’ spenders are propping up the economy spenders are propping up the economy spenders are propping up the economy",
  summary:
    "There is one catalyst that could shake the current slow-paced bull market into a faster-paced that could shake the current slow-paced bull market into a faster-paced that could shake the current slow-paced bull market into a faster-paced",
};

export const Default: Story = {
  args: dummyData,
  render: (args) => <ImageNewsItem {...args} />,
};
