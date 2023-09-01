import type { Meta, StoryObj } from "@storybook/react";

import StoryWrapper from "@story/StoryWrapper";

import Image from "./Image";

const meta = {
  title: "Atom/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    loading: {
      table: {
        disable: true,
      },
    },
    loader: {
      table: {
        disable: true,
      },
    },
    quality: {
      table: {
        disable: true,
      },
    },
    priority: {
      table: {
        disable: true,
      },
    },
    blurDataURL: {
      table: {
        disable: true,
      },
    },
    unoptimized: {
      table: {
        disable: true,
      },
    },
    onLoadingComplete: {
      table: {
        disable: true,
      },
    },
    layout: {
      table: {
        disable: true,
      },
    },
    objectFit: {
      table: {
        disable: true,
      },
    },
    objectPosition: {
      table: {
        disable: true,
      },
    },
    lazyBoundary: {
      table: {
        disable: true,
      },
    },
    lazyRoot: {
      table: {
        disable: true,
      },
    },
    fill: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => <Image width="w-[200rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />,
};

/**
 * Image는 width와 height를 통해 크기를 지정할 수 있습니다.
 *
 * - `width`: 필수 속성으로 width만 지정 시 기본적으로 1:1의 비율로 렌더링됩니다.
 * - `height`: 선택 속성으로 필요 시 지정합니다.
 */
export const ImageSize: Story = {
  render: () => (
    <StoryWrapper>
      <Image width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image
        width="w-[200rem]"
        height="h-[100rem]"
        alt="chistock 이미지"
        src="https://url.kr/kd35ap"
      />
    </StoryWrapper>
  ),
};

/**
 * Image는 rounded 속성을 통해 테두리 반경을 조절할 수 있습니다.
 *
 * - `none` : 없음
 * - `xs` : 2px
 * - `s` : 4px
 * - `m` : 8px
 * - `l` : 16px
 * - `circle` : 둥근 테두리
 */
export const ImageRadius: Story = {
  render: () => (
    <StoryWrapper>
      <Image rounded="none" width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image rounded="xs" width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image rounded="s" width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image rounded="m" width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image rounded="l" width="w-[100rem]" alt="chistock 이미지" src="https://url.kr/kd35ap" />
      <Image
        rounded="circle"
        width="w-[100rem]"
        alt="chistock 이미지"
        src="https://url.kr/kd35ap"
      />
    </StoryWrapper>
  ),
};

export const Playground: Story = {
  argTypes: {
    width: {
      options: ["w-[200rem]", "w-[400rem]", "w-[800rem]"],
      control: { type: "select" },
    },
    height: {
      options: ["h-[200rem]", "h-[400rem]", "h-[800rem]"],
      control: { type: "select" },
    },
    src: {
      control: { type: "text" },
    },
  },
  args: {
    width: "w-[200rem]",
    src: "https://url.kr/kd35ap",
    alt: "chistock",
  },
  render: (args) => <Image {...args} />,
};
