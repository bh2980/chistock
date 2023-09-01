type HighlighterPropsType = React.PropsWithChildren & {
  color: keyof typeof HighlighterColor;
};

const HighlighterColor = {
  yellow: "#fff5b1",
  gray: "#f6f8fa",
  blue: "#f1f8ff",
  red: "#ffdce0",
  green: "#dcffe4",
  purple: "#f5f0ff",
  orange: "#f7ddBe",
};

/** Storybook 문서에서 형광펜을 표시하기 위한 컴포넌트입니다. */
const Highlighter = ({ children, color = "yellow" }: HighlighterPropsType) => {
  return (
    <span
      style={{ backgroundColor: HighlighterColor[color], padding: "0px 4px", fontSize: "inherit" }}
    >
      {children}
    </span>
  );
};

export default Highlighter;
