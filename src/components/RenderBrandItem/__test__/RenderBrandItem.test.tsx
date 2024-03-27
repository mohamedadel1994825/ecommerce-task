import { Brand } from "@interfaces";
import { cleanup, fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { RenderBrandItem } from "../index";

describe("RenderBrandItem", () => {
  afterEach(cleanup);

  const brand: Brand = { id: 1, name: "Test Brand" };
  const isSelected = true;
  const onPress = jest.fn();

  it("should match snapshot", () => {
    const { toJSON } = render(
      <RenderBrandItem item={brand} isSelected={isSelected} onPress={onPress} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render BrandItem component with correct props", () => {
    const { getByText } = render(
      <RenderBrandItem item={brand} isSelected={isSelected} onPress={onPress} />
    );
    const brandItem = getByText(brand.name);
    fireEvent.press(brandItem);
    expect(onPress).toHaveBeenCalled();
  });
});
