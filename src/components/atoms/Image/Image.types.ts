import { ImageProps } from "next/image";
import { VariantProps } from "tailwind-variants";

import { NonNullableProps } from "@customTypes/utilType";

import { imageVariants } from "./Image";

/** cva로 만든 Image Variants의 Type */
type ImageVariantsType = NonNullableProps<VariantProps<typeof imageVariants>>;

/** Image 기본 Props Type */
type ImageBasePropsType = {
  /** 이미지 가로 크기
   *
   * width만 설정 시 가로 세로 비율이 1:1로 렌더링됩니다.
   */
  width: number;
  /** 이미지 세로 크기 */
  height?: number;
};

/** ImagePropsType에서 제거할 속성 */
type PropsToOmit = keyof ImageBasePropsType | keyof ImageVariantsType;

/** Image 컴포넌트의 Props 타입 */
export type ImagePropsType = Omit<ImageProps, PropsToOmit> & ImageBasePropsType & ImageVariantsType;
