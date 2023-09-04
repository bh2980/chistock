import { Canvas, Description, Markdown, Story } from "@storybook/blocks";
import { PropsWithChildren } from "react";

import Highlighter from "./Highlighter";

/**
 * 스토리의 JSDoc 설명과 Canvas를 한 번에 렌더링하는 컴포넌트입니다.
 *
 * 스토리 제목 - JSDoc 설명 - children - Canvas 순으로 렌더링됩니다.
 *
 * @param `of` : story
 * @param `highlight` : 스토리 제목 형광펜 표시 여부
 * */
const StoryDescription = ({
  children,
  of,
  highlight = false,
}: { of: typeof Story; highlight?: boolean } & PropsWithChildren) => {
  return (
    <>
      {highlight ? (
        <Highlighter>
          <Markdown style={{ margin: 0 }}>{`### ${of.displayName}`}</Markdown>
        </Highlighter>
      ) : (
        <Markdown>{`### ${of.displayName}`}</Markdown>
      )}

      <Description of={of} />
      {children}
      <Canvas of={of} />
    </>
  );
};

export default StoryDescription;
