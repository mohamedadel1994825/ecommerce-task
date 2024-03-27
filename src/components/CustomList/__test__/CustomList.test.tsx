import { cleanup, render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { CustomList } from "../index";

describe("CustomList", () => {
  afterEach(cleanup);

  const data = [1, 2, 3, 4, 5];

  const renderItem = ({ item }: { item: number }) => (
    <Text testID="list-item">{item}</Text>
  );

  it("should match snapshot", () => {
    const { toJSON } = render(
      <CustomList data={data} renderItem={renderItem} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render correct number of items", () => {
    const { getAllByTestId } = render(
      <CustomList data={data} renderItem={renderItem} />
    );
    const listItems = getAllByTestId("list-item");
    expect(listItems.length).toBe(data.length);
  });

  it("should render separator between items", () => {
    const { getAllByTestId } = render(
      <CustomList data={data} renderItem={renderItem} />
    );
    const separators = getAllByTestId("list-item-separator");
    expect(separators.length).toBe(data.length - 1);
  });
});
