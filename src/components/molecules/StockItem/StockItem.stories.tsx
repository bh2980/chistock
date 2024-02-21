import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import StockItem from "./StockItem";

const meta = {
  title: "Molecules/StockItem",
  component: StockItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StockItem>;

export default meta;
type Story = StoryObj<typeof StockItem>;

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

export const Default: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockItem
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <StoryWrapper className="w-[360rem] gap-2xl" direction="vertical">
      <StockItem
        size="md"
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
      <StockItem
        size="lg"
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
    </StoryWrapper>
  ),
};

export const TickerAccent: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockItem
        tickerAccent
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
    </div>
  ),
};

export const NoMarket: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockItem
        tickerAccent
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
      />
    </div>
  ),
};

export const NoImage: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockItem
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
      />
    </div>
  ),
};
