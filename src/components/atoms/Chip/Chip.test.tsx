import { render, screen } from "@testing-library/react";

import Chip from "./Chip";

describe("Chip", () => {
  it("에러 없이 렌더링되어야 합니다.", () => {
    render(<Chip />);

    const button = screen.getByRole("button");

    expect(button.tagName).toBe("BUTTON");
  });
});
