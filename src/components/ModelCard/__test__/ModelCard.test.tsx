import { render } from "@testing-library/react-native";
import React from "react";
import { ModelCard } from "../index";

describe("ModelCard", () => {
  const mockModel = {
    id: "1",
    name: "Mock Model",
    image: "mock_image_url",
    availableProducts: 10,
    quantity: 5,
    space: "Mock Space",
    color: "Mock Color",
  };

  it("renders correctly", () => {
    const { getByText } = render(<ModelCard item={mockModel} />);

    expect(getByText(mockModel.name)).toBeTruthy();
    expect(getByText(`${mockModel.space} | ${mockModel.color}`)).toBeTruthy();
    expect(getByText(mockModel.availableProducts.toString())).toBeTruthy();
    expect(getByText(mockModel.quantity.toString())).toBeTruthy();
  });

  it("renders the image correctly", () => {
    const { getByTestId } = render(<ModelCard item={mockModel} />);
    const imageComponent = getByTestId("model-image");

    expect(imageComponent.props.source.uri).toBe(mockModel.image);
  });
});
