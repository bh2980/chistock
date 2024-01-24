type sizeProps = {
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  height?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  style?: React.CSSProperties;
} & { [key: string]: unknown };

/** 파라미터를 받아서 올바른 CSS String으로 변환 */
export const convertCSSSize = (input: number | string | undefined) => {
  if (input === undefined) return input;

  if (typeof input === "number" || /^-?[0-9]+$/.exec(input)) {
    return `${input}rem`;
  }

  input = input.replaceAll("px", "rem");

  return input;
};

/**
 * width, maxWidth, minWidth, height, maxHeight, minHeight의 props를 받아서
 * 단위 변환 및 inline style css로 넣어주는 props
 */
const convertSizeProps = (props: sizeProps) => {
  const {
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    top,
    bottom,
    left,
    right,
    style,
    ...rest
  } = props;

  return {
    style: {
      width: convertCSSSize(width),
      maxWidth: convertCSSSize(maxWidth),
      minWidth: convertCSSSize(minWidth),
      height: convertCSSSize(height),
      maxHeight: convertCSSSize(maxHeight),
      minHeight: convertCSSSize(minHeight),
      top: convertCSSSize(top),
      bottom: convertCSSSize(bottom),
      left: convertCSSSize(left),
      right: convertCSSSize(right),
      ...style,
    },
    ...rest,
  };
};

export default convertSizeProps;
