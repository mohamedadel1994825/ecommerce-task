import { render } from "@testing-library/react-native";
import React from "react";
import { Separator } from "../index";

describe("Separator", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(<Separator />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("should render correctly", () => {
    const { getByTestId } = render(<Separator />);
    const separator = getByTestId("list-item-separator");
    expect(separator).toBeDefined();
  });
});
