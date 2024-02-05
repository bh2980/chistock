import type { Meta, StoryObj } from "@storybook/react";

import Icon from "@atoms/Icon/Icon";

import Tab from "./Tab";

const meta = {
  title: "Atom/TabList",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab.TabList defaultSelected={"tab1"}>
      <Tab value="tab1">Tab</Tab>
      <Tab value="tab2">The Longest Tab</Tab>
      <Tab value="tab3">
        <Icon icon="moon" />
      </Tab>
    </Tab.TabList>
  ),
};
