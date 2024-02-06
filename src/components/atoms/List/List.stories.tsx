import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import StoryWrapper from "@story/StoryWrapper";

import Divider from "@atoms/Divider/Divider";

import List from "./List";

const meta = {
  title: "Atom/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

const Item = ({ content }: { content: string }) => {
  return <div className="flex text-m p-m">{content}</div>;
};

export const Default: Story = {
  render: () => (
    <List>
      {[1, 2, 3, 4].map((num) => {
        return <Item key={num} content={`Item ${num}`} />;
      })}
    </List>
  ),
};

export const HorizontalList: Story = {
  render: () => (
    <List horizontal>
      {[1, 2, 3, 4].map((num) => {
        return <Item key={num} content={`Item ${num}`} />;
      })}
    </List>
  ),
};

export const DividerList: Story = {
  render: () => (
    <List divider={<Divider className="w-[50%] mx-auto" />}>
      {[1, 2, 3, 4].map((num) => {
        return <Item key={num} content={`Item ${num}`} />;
      })}
    </List>
  ),
};

export const RatingList: Story = {
  render: () => (
    <StoryWrapper direction="vertical">
      <List rating divider={<Divider />}>
        {[1, 2, 3, 4].map((num) => {
          return (
            <React.Fragment key={num}>
              <Item content={`Item ${num}`} />
            </React.Fragment>
          );
        })}
      </List>
      <List horizontal rating divider={<Divider vertical />}>
        {[1, 2, 3, 4].map((num) => {
          return <Item key={num} content={`Item ${num}`} />;
        })}
      </List>
    </StoryWrapper>
  ),
};
