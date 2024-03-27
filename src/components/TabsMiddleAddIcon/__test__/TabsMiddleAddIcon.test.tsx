import { cleanup, render } from "@testing-library/react-native";
import React from "react";
import { TabsMiddleAddIcon } from "../index";

describe("TabsMiddleAddIcon", () => {
  afterEach(cleanup);

  it("should match snapshot", () => {
    const { toJSON } = render(<TabsMiddleAddIcon />);
    expect(toJSON()).toMatchSnapshot();
  });
});
