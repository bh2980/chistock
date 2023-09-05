import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";

import ICON_MAP from "@constants/iconMap";

import { exceptProperty } from "@utils/utils";

import StoryWrapper from "@story/StoryWrapper";

import Icon from "@atoms/Icon/Icon";

import Button from "./Button";

const meta = {
  title: "Atom/Button",
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
          summary: `"button" | "a" | "next/Link"`,
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

/**
 * `variant` 속성을 이용해 버튼을 다양한 형태로 사용할 수 있습니다.
 *
 * - `primary` : 페이지 상에서 핵심적인 동작에 사용합니다.
 * - `secondry` : 일반적으로 렌더링되는 기본 버튼 상태입니다.
 * - `text` : 우선순위가 낮거나 글씨만 보여져야하는 버튼에서 사용합니다.
 * - `danger` : 경고 혹은 위험할 수 있는 상황에 사용합니다.
 *
 * 기본값으로 `secondary`가 설정되어있습니다.
 */
export const ButtonVariant: Story = {
  name: "Variant",
  render: () => (
    <StoryWrapper>
      <Button variant="primary">버튼</Button>
      <Button>버튼</Button>
      <Button variant="text">버튼</Button>
      <Button variant="danger">버튼</Button>
    </StoryWrapper>
  ),
};

/**
 * `size` 속성을 통해 버튼의 크기를 조절할 수 있습니다.
 *
 * - `s` : 버튼 태그
 * - `m` : a 태그
 * - `l` : next/Link 태그
 *
 * 기본값으로 `m`이 설정되어있습니다.
 */
export const ButtonSize: Story = {
  name: "Size",
  render: () => (
    <StoryWrapper>
      <Button size="s">버튼</Button>
      <Button>버튼</Button>
      <Button size="l">버튼</Button>
    </StoryWrapper>
  ),
};

/**
 * `icon` 및 `iconPosition` 속성을 이용해 버튼에 아이콘을 위치시킬 수 있습니다.
 *
 * - `before` : 아이콘을 글자 앞에 위치
 * - `after` : 아이콘을 글자 뒤에 위치
 *
 * 기본값으로 `before`가 설정되어 있습니다.
 */
export const ButtonIcon: Story = {
  name: "Icon",
  render: () => (
    <StoryWrapper>
      <Button icon={<Icon icon="moon" />} iconPosition="before">
        다크 모드
      </Button>
      <Button icon={<Icon icon="moon" />} iconPosition="after">
        다크 모드
      </Button>
      <Button icon={<Icon icon="moon" />} />
    </StoryWrapper>
  ),
};

/**
 * 버튼은 다양한 상태를 가질 수 있습니다.
 *
 * - `disabled` : `disabled` 속성을 이용해 버튼을 비활성화할 수 있습니다.
 */
export const ButtonState: Story = {
  name: "State",
  render: () => (
    <StoryWrapper>
      <Button disabled>버튼</Button>
    </StoryWrapper>
  ),
};

/**
 * `renderAs` 속성을 이용해 버튼을 다양한 태그로 렌더링할 수 있습니다.
 *
 * - `button` : 버튼 태그
 * - `a` : a 태그
 * - `Link` : next/Link 태그
 *
 * 기본값으로 `button`이 설정되어있습니다.
 */
export const ButtonRenderAs: Story = {
  name: "RenderAs",
  render: () => (
    <StoryWrapper>
      <Button>button 태그 버튼</Button>
      <Button renderAs={"a"}>a 태그 버튼</Button>
      <Button renderAs={Link} href="/">
        next/Link 버튼
      </Button>
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
    icon: {
      options: [undefined, ...Object.keys(ICON_MAP)],
    },
    ...exceptProperty(["innerRef"]),
  },
  args: {
    disabled: false,
  },
  render: (args) => (
    //@ts-ignore
    <Button {...args} icon={args.icon && <Icon icon={args.icon} />}>
      버튼
    </Button>
  ),
};
