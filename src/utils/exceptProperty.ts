type AccType = { [key: string]: { table: { disable: true } } };

/** Storybook에서 ArgsTable에서 제외할 타입들을 argsType 객체로 만드는 함수 */
export const exceptProperty = (exceptProperties: string[]) => {
  return exceptProperties.reduce((acc: AccType, cur) => {
    acc[cur] = {
      table: {
        disable: true,
      },
    };

    return acc;
  }, {});
};
