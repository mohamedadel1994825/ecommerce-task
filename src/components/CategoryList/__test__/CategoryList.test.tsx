import { cleanup, render } from "@testing-library/react-native";
import React from "react";
import { CategoryList } from "../index";
jest.mock("../../../store/productsData.json", () => ({
  categories: [
    { id: 1, name: "Category 1", brands: [{ id: 1, name: "Brand 1" }] },
    { id: 2, name: "Category 2", brands: [{ id: 2, name: "Brand 2" }] },
    { id: 3, name: "Category 3", brands: [{ id: 3, name: "Brand 3" }] },
  ],
}));
describe("CategoryList", () => {
  afterEach(cleanup);

  const selectedCategory = {
    id: 2,
    name: "Category 2",
    brands: [{ id: 2, name: "Brand 2" }],
  };

  const setSelectedCategory = jest.fn();
  const setSelectedBrand = jest.fn();

  it("should match snapshot", () => {
    const { toJSON } = render(
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedBrand={setSelectedBrand}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
