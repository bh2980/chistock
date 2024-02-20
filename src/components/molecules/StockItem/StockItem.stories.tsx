import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import StockInfoItem from "./StockItem";

const meta = {
  title: "Molecules/StockItem",
  component: StockInfoItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StockInfoItem>;

export default meta;
type Story = StoryObj<typeof StockInfoItem>;

const IMAGE_URL =
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh6ap9%2Fbtsz6jE1NAF%2FU1bUIepR14dMID1g0Z8Wr1%2Fimg.png";

export const Default: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockInfoItem
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
      <StockInfoItem
        size="md"
        src={IMAGE_URL}
        companyName="Apple Inc"
        ticker="AAPL"
        currentPrice={189.57}
        change={17.2}
        changePercentage={20.5}
        market="NASDAQ"
      />
      <StockInfoItem
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
      <StockInfoItem
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
      <StockInfoItem
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

// TODO StockLogo 만들고 수정
export const NoImage: Story = {
  render: () => (
    <div className="w-[360rem]">
      <StockInfoItem
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
