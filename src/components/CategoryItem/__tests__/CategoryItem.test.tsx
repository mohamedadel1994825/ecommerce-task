import { cleanup, render } from "@testing-library/react-native";
import React from "react";

import { CategoryItem } from "../index";

describe("CategoryItem", () => {
  afterEach(cleanup);

  const item = {
    image: "image-name",
    category: "Category Name",
  };

  it("should match snapshot", () => {
    const { toJSON } = render(
      <CategoryItem item={item} isSelected={true} onPress={() => {}} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders category text correctly", () => {
    const { getByText } = render(
      <CategoryItem item={item} isSelected={true} onPress={() => {}} />
    );
    expect(getByText(item.category)).toBeTruthy();
  });
});
