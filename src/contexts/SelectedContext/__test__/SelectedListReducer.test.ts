import SelectedListReducer from "../SelectedListReducers";

describe("SelectedListReducer 테스트", () => {
  it("SELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1"];

    const newState = SelectedListReducer(initialState, {
      type: "SELECT",
      payload: "2",
    });

    expect(newState).toEqual(["2"]);
  });

  it("UNSELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1", "2"];

    const newState = SelectedListReducer(initialState, {
      type: "UNSELECT",
      payload: "1",
    });

    expect(newState).toEqual(["2"]);
  });

  it("MULTISELECT 액션에 대한 상태 변경이 올바르게 이루어져야 합니다.", () => {
    const initialState = ["1"];

    const newState = SelectedListReducer(initialState, {
      type: "MULTISELECT",
      payload: "2",
    });

    expect(newState).toEqual(["1", "2"]);
  });
});
