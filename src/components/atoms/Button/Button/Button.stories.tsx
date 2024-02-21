import type { Meta, StoryObj } from "@storybook/react";

import { exceptProperty } from "@utils/exceptProperty";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "@atoms/Icon/Icon";

import Button from "./Button";

const meta = {
  title: "Atom/Button/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    renderAs: {
      table: {
        defaultValue: { summary: "button" },
        type: {
          summary: `"button" | "a"`,
        },
      },
    },
    ...exceptProperty(["onClick", "onMouseEnter", "onTouchStart", "innerRef"]),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
};

export const Variant: Story = {
  render: () => (
    <StoryWrapper>
      <Button variant="filled">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="ghost">Button</Button>
    </StoryWrapper>
  ),
};

export const Color: Story = {
  render: () => (
    <StoryWrapper className="flex flex-col">
      <StoryWrapper>
        <Button variant="filled" color="primary">
          Button
        </Button>
        <Button variant="outlined" color="primary">
          Button
        </Button>
        <Button variant="ghost" color="primary">
          Button
        </Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="filled">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="ghost">Button</Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="filled" color="danger">
          Button
        </Button>
        <Button variant="outlined" color="danger">
          Button
        </Button>
        <Button variant="ghost" color="danger">
          Button
        </Button>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

export const ButtonRounded: Story = {
  name: "Rounded",
  render: () => (
    <StoryWrapper>
      <StoryWrapper>
        <Button rounded="rounded">Button</Button>
        <Button rounded="circular">Button</Button>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * `size` 속성을 통해 버튼의 크기를 조절할 수 있습니다.
 *
 * - `s`
 * - `m`
 * - `l`
 *
 * 기본값으로 `m`이 설정되어있습니다.
 */
export const ButtonSize: Story = {
  name: "Size",
  render: () => (
    <StoryWrapper>
      <Button size="s">Button</Button>
      <Button>Button</Button>
      <Button size="l">Button</Button>
    </StoryWrapper>
  ),
};

/**
 * Icon을 단독으로 사용하는 경우 isIconButton 속성을 사용합니다.
 *
 * isIconButton 속성을 사용할 경우 `label` 속성을 필수로 작성해야합니다.
 */
export const IconButton: Story = {
  render: () => (
    <StoryWrapper>
      <Button label="다크 모드" isIconButton>
        <Icon icon="moon" />
      </Button>
    </StoryWrapper>
  ),
};

export const ButtonState: Story = {
  name: "State",
  parameters: {
    pseudo: {
      hover: ".hover",
      active: ".press",
      focusVisible: ".focus",
    },
  },
  render: () => (
    <StoryWrapper className="flex-col">
      <StoryWrapper>
        <Button>Button</Button>
        <Button className="hover">Button</Button>
        <Button className="press">Button</Button>
        <Button className="focus">Button</Button>
        <Button disabled>Button</Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined" className="hover">
          Button
        </Button>
        <Button variant="outlined" className="press">
          Button
        </Button>
        <Button variant="outlined" className="focus">
          Button
        </Button>
        <Button variant="outlined" disabled>
          Button
        </Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="ghost">Button</Button>
        <Button variant="ghost" className="hover">
          Button
        </Button>
        <Button variant="ghost" className="press">
          Button
        </Button>
        <Button variant="ghost" className="focus">
          Button
        </Button>
        <Button variant="ghost" disabled>
          Button
        </Button>
      </StoryWrapper>
    </StoryWrapper>
  ),
};

/**
 * Playground에서 Button 컴포넌트를 직접 테스트해보세요.
 *
 * [Button Playground로 이동](?path=/story/atom-button--playground)
 */
export const Playground: Story = {
  argTypes: {
    renderAs: {
      options: ["button", "a"],
      control: { type: "select" },
    },
    ...exceptProperty(["innerRef"]),
  },
  args: {
    disabled: false,
  },
  parameters: { a11y: { disable: true } },
  render: (args) => (
    //@ts-ignore
    <Button {...args} icon={args.icon && <Icon icon={args.icon} />}>
      버튼
    </Button>
  ),
};
