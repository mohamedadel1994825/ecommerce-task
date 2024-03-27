import { cleanup, fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { BrandList } from "../index";

describe("BrandList", () => {
  afterEach(cleanup);

  const brands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
  ];

  const selectedBrand = { id: 2, name: "Brand 2" };

  const setSelectedBrand = jest.fn();

  it("should match snapshot", () => {
    const { toJSON } = render(
      <BrandList
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render correct number of brands", () => {
    const { getAllByTestId } = render(
      <BrandList
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    );
    const brandItems = getAllByTestId("brand-item");
    expect(brandItems.length).toBe(brands.length);
  });

  it("should call setSelectedBrand with correct brand when pressed", () => {
    const { getByText } = render(
      <BrandList
        brands={brands}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    );
    const brandItem = getByText(brands[0].name);
    fireEvent.press(brandItem);
    expect(setSelectedBrand).toHaveBeenCalledWith(brands[0]);
  });
});
