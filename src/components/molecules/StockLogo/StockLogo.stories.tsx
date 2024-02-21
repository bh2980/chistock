import type { Meta, StoryObj } from "@storybook/react";

import StockLogo from "./StockLogo";

const meta = {
  title: "Molecules/StockLogo",
  component: StockLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StockLogo>;

export default meta;
type Story = StoryObj<typeof StockLogo>;

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

export const Default: Story = {
  render: () => (
    <StockLogo
      src={IMAGE_URL}
      ticker={"CHST"}
      alt="chistock logo"
      className="w-[48rem] h-[48rem]"
    />
  ),
};

export const WrongImageUrl: Story = {
  render: () => (
    <StockLogo
      src="iamwrongurl"
      ticker={"CHST"}
      alt="chistock logo"
      className="w-[48rem] h-[48rem]"
    />
  ),
};

export const TickerLogo: Story = {
  render: () => <StockLogo ticker={"CHST"} alt="chistock logo" className="w-[48rem] h-[48rem]" />,
};
