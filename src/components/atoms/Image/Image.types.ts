import { ImageProps } from "next/image";
import { VariantProps } from "tailwind-variants";

import { NonNullableProps } from "@customTypes/utilType";

import { imageVariants } from "./Image";

/** cva로 만든 Image Variants의 Type */
type ImageVariantsType = NonNullableProps<VariantProps<typeof imageVariants>>;

/** ImagePropsType에서 제거할 속성 */
type PropsToOmit = keyof ImageVariantsType;

/** Image 컴포넌트의 Props 타입 */
export type ImagePropsType = Omit<ImageProps, PropsToOmit> & ImageVariantsType;
