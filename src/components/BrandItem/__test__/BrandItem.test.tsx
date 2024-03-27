import { cleanup, fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { BrandItem } from "../index";

describe("BrandItem", () => {
  afterEach(cleanup);

  const item = { name: "Brand Name" };

  it("should match snapshot when not selected", () => {
    const { toJSON } = render(
      <BrandItem item={item} isSelected={false} onPress={() => {}} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should match snapshot when selected", () => {
    const { toJSON } = render(
      <BrandItem item={item} isSelected={true} onPress={() => {}} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should call onPress callback when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <BrandItem item={item} isSelected={false} onPress={onPress} />
    );
    fireEvent.press(getByTestId("brand-item")); // Fire press event directly
    expect(onPress).toHaveBeenCalled();
  });
});
