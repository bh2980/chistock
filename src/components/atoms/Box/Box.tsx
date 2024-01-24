import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";

import convertSizeProps, { sizeProps } from "@utils/convertSizeProps";

import Slot from "@atoms/Slot/Slot";

/**
 * 사이즈 혹은 배치에 관련된 props들을 inline CSS로 바꿔주는 헬퍼 컴포넌트입니다
 * 처리하는 props는 아래와 같습니다.
 *
 * - 크기 관련 : width, minWidth, maxWidth, height, minHeight, maxHeight
 * - 배치 관련 : top, bottom, left, right
 */
const Box = <T extends React.ElementType = "div">(
  props: PolymorphicPropsWithInnerRefType<T, sizeProps>
) => {
  const covertProps = convertSizeProps(props);

  return <Slot<T> {...(covertProps as unknown as PolymorphicPropsWithInnerRefType<T>)}></Slot>;
};

export default Box;
