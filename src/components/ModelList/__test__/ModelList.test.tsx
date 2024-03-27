import { render } from "@testing-library/react-native";
import React from "react";
import { ModelList } from "../index";

describe("ModelList", () => {
  const mockModels = [
    { id: 1, name: "Model 1" },
    { id: 2, name: "Model 2" },
    { id: 3, name: "Model 3" },
  ];

  it("renders correctly", () => {
    const { getByTestId } = render(<ModelList models={mockModels} />);

    expect(getByTestId("shop-by-models")).toBeTruthy();
    expect(getByTestId("custom-list")).toBeTruthy();
  });

  it("passes the correct props to CustomList", () => {
    const { getByTestId } = render(<ModelList models={mockModels} />);
    const customListComponent = getByTestId("custom-list");

    expect(customListComponent.props.contentContainerStyle).toBeDefined();
    expect(customListComponent.props.data).toBe(mockModels);
    expect(customListComponent.props.renderItem).toBeDefined();
    expect(customListComponent.props.keyExtractor).toBeDefined();
  });
});
