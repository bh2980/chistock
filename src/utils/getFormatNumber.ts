type getFormatNumberParams = {
  number: number;
  decimalPoint?: number;
  prefix?: string;
  postfix?: string;
};

export const getFormatNumber = ({
  number,
  decimalPoint = 2,
  prefix = "",
  postfix = "",
}: getFormatNumberParams) => {
  const underDecimalPoint = (number % 1).toFixed(decimalPoint).replace("0.", "");
  const formatInteger = Math.floor(number).toLocaleString();
  const formattedNumber =
    decimalPoint > 0 ? `${formatInteger}.${underDecimalPoint}` : formatInteger;

  return `${prefix}${formattedNumber}${postfix}`;
};
