import { Model } from "@interfaces";
import { cleanup, render } from "@testing-library/react-native";
import { default as React } from "react";
import { RenderModelItem } from "../index";

describe("RenderModelItem", () => {
  afterEach(cleanup);

  const model: Model = {
    id: 1,
    name: "Test Model",
    image: "test-image-url",
    availableProducts: 5,
    quantity: 10,
    space: "test-space",
    color: "test-color",
  };

  it("should match snapshot", () => {
    const { toJSON } = render(<RenderModelItem item={model} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render ModelCard component with correct props", () => {
    const { getByTestId } = render(<RenderModelItem item={model} />);
    const modelCard = getByTestId("model-card");
    expect(modelCard).toBeTruthy();
  });
});
