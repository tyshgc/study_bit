import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Hoge from "../../components/Hoge/Hoge";

afterEach(cleanup);

describe("Hoge", () => {
  it("textの初期状態は何も表示しない", () => {
    const { getByTestId } = render(<Hoge />);
    expect(getByTestId("text")).toHaveTextContent("");
  });

  it("text propsに文字列が渡っているか", () => {
    const { getByTestId } = render(<Hoge text="文字列" />);
    expect(getByTestId("text")).toHaveTextContent("文字列");
  });
});
