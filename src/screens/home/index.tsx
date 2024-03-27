import { Brand, Category } from "@interfaces";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { BrandList, CategoryList, ModelList } from "../../components";
import productsData from "../../store/productsData.json";
import { HomeScreenProps } from "./interfaces";
import { styles } from "./styles";

const HomeScreen: React.FC<HomeScreenProps> = ({}): JSX.Element => {
  const initialCategory: Category = productsData[0];
  const initialBrand: Brand = productsData[0].brands[0];

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<Brand>(initialBrand);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CategoryList
        {...{
          selectedCategory,
          setSelectedCategory,
          setSelectedBrand,
        }}
      />
      <BrandList
        brands={selectedCategory.brands}
        {...{ selectedBrand, setSelectedBrand }}
      />
      <ModelList models={selectedBrand.models} />
    </ScrollView>
  );
};

export { HomeScreen };
