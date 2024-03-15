import { numType } from "@constants/numType";

export const checkNumType = (number: number) => {
  return number > 0 ? numType.POSITIVE : number < 0 ? numType.NEGATIVE : numType.ZERO;
};
