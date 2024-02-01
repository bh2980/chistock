import type { Meta, StoryObj } from "@storybook/react";

import ICON_MAP from "@constants/iconMap";

import { exceptProperty } from "@utils/utils";

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
      <Button variant="error">버튼</Button>
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
export const ButtonWithIcon: Story = {
  render: () => (
    <StoryWrapper>
      <Button icon={<Icon icon="moon" />} iconPosition="before">
        다크 모드
      </Button>
      <Button icon={<Icon icon="moon" />} iconPosition="after">
        다크 모드
      </Button>
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
      <Button icon={<Icon icon="moon" />} label="다크 모드" isIconButton>
        Button
      </Button>
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
  parameters: {
    pseudo: {
      hover: ".hover",
      active: ".press",
      focusVisible: ".focusVisible",
    },
  },
  render: () => (
    <StoryWrapper className="flex-col">
      <StoryWrapper>
        <Button variant="primary">버튼</Button>
        <Button variant="primary" disabled>
          버튼
        </Button>
        <Button
          variant="primary"
          disabled
          icon={<Icon icon="moon" />}
          isIconButton
          label="다크 모드"
        />
        <Button variant="primary" className="hover">
          버튼
        </Button>
        <Button variant="primary" className="press">
          버튼
        </Button>
        <Button variant="primary" className="focusVisible">
          버튼
        </Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button>버튼</Button>
        <Button disabled>버튼</Button>
        <Button disabled icon={<Icon icon="moon" />} isIconButton label="다크 모드" />
        <Button className="hover">버튼</Button>
        <Button className="press">버튼</Button>
        <Button className="focusVisible">버튼</Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="error">버튼</Button>
        <Button variant="error" disabled>
          버튼
        </Button>
        <Button
          variant="error"
          disabled
          icon={<Icon icon="moon" />}
          isIconButton
          label="다크 모드"
        />
        <Button variant="error" className="hover">
          버튼
        </Button>
        <Button variant="error" className="press">
          버튼
        </Button>
        <Button variant="error" className="focusVisible">
          버튼
        </Button>
      </StoryWrapper>
      <StoryWrapper>
        <Button variant="text">버튼</Button>
        <Button variant="text" disabled>
          버튼
        </Button>
        <Button
          variant="text"
          disabled
          icon={<Icon icon="moon" />}
          isIconButton
          label="다크 모드"
        />
        <Button variant="text" className="hover">
          버튼
        </Button>
        <Button variant="text" className="press">
          버튼
        </Button>
        <Button variant="text" className="focusVisible">
          버튼
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
    icon: {
      options: [undefined, ...Object.keys(ICON_MAP)],
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
