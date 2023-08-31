import type { Meta, StoryObj } from "@storybook/react";

import Button from "@atoms/Button/Button";
import Icon from "@atoms/Icon/Icon";
import Text from "@atoms/Text/Text";
import Image from "@atoms/Image/Image";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "컴포넌트 부제목",
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/** 스토리 설명 */
export const ButtonTag: Story = {
  render: (args) => <Button {...args}>LABEL</Button>,
};

export const IconTextBtn: Story = {
  args: {
    icon: <Icon icon="plus" />,
  },
  render: (args) => <Button {...args}>Add Wishlist</Button>,
};

export const TextIconBtn: Story = {
  args: {
    icon: <Icon icon="moon" />,
    iconPosition: "after",
    onClick: () => {
      const $html = document.getElementsByTagName("html");
      $html[0].classList.toggle("theme-light");
      $html[0].classList.toggle("theme-dark");
    },
  },
  render: (args) => <Button {...args}>Switch to Dark Mode</Button>,
};

export const BtnWithClass: Story = {
  args: {
    className: "w-desktop-4 uppercase justify-between",
    icon: <Icon icon="setting" />,
    iconPosition: "after",
  },
  render: (args) => <Button {...args}>Setting</Button>,
};

export const IconBtn: Story = {
  args: {
    icon: <Icon icon="chevron-up" />,
  },
  render: (args) => <Button {...args}></Button>,
};

export const TextedIconBtn: Story = {
  args: {
    icon: <>👏</>,
  },
  render: (args) => (
    <Button {...args}>
      <Text>Clap</Text>
    </Button>
  ),
};

export const ImageIconATagBtn: Story = {
  args: {
    renderAs: "a",
    href: "https://bh2980.tistory.com/category/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/chistock",
    target: "_blank",
    className: "bg-[#EA531E] text-[#FFFFFF]",
    icon: (
      <Image
        src="https://www.basicincomeparty.kr/wp-content/uploads/2020/11/tistory-logo-fill_white.png"
        alt="chistock logo"
        rounded={"circle"}
      />
    ),
  },
  render: (args) => (
    <Button {...args}>
      <Text>제주도랏맨의 블로그</Text>
    </Button>
  ),
};
