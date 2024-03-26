import { Brand, Category, Model } from "@interfaces";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, Text, View } from "react-native";
import {
  BrandItem,
  CategoryItem,
  CustomList,
  ModelCard,
} from "../../components";
import productsData from "../../store/productsData.json";
import { HomeScreenProps } from "./interfaces";
import { styles } from "./styles";

const HomeScreen: React.FC<HomeScreenProps> = ({}): JSX.Element => {
  const { t } = useTranslation();

  const initialCategory: Category = productsData[0];
  const initialBrand: Brand = productsData[0].brands[0];

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<Brand>(initialBrand);

  const renderCategoryItem = ({ item }: { item: Category }) => {
    const isSelectedCategory = item == selectedCategory;
    return (
      <CategoryItem
        item={item}
        isSelected={isSelectedCategory}
        onPress={() => {
          setSelectedCategory(item);
          setSelectedBrand(item.brands[0]);
        }}
      />
    );
  };

  const renderBrandItem = ({ item }: { item: Brand }) => {
    const isSelectedBrand = item == selectedBrand;
    return (
      <BrandItem
        item={item}
        isSelected={isSelectedBrand}
        onPress={() => setSelectedBrand(item)}
      />
    );
  };

  const renderModelItem = ({ item }: { item: Model }) => (
    <ModelCard {...{ item }} /> // Assuming ModelCard accepts props directly
  );

  return (
    <ScrollView
      nestedScrollEnabled
      scrollEnabled
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Text style={styles.categoryTitle}>
        {t("navigation:home:categories")}
      </Text>
      <CustomList // Use the CustomList component here
        horizontal
        data={productsData}
        renderItem={renderCategoryItem}
        keyExtractor={(category: Category) => category.category}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.categoryItemIndicator} />
      <Text style={styles.brandTitle}>
        {" "}
        {t("navigation:home:shopByBrands")}
      </Text>
      <CustomList // Use the CustomList component here
        horizontal
        data={selectedCategory.brands}
        renderItem={renderBrandItem}
        keyExtractor={(brand: Brand) => brand.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Text style={styles.modelTitle}>{t("navigation:home:shopByModels")}</Text>
      <CustomList // Use the CustomList component here
        contentContainerStyle={styles.modelListContainer}
        data={selectedBrand.models}
        renderItem={renderModelItem}
        keyExtractor={(model: Model) => model.name}
        numColumns={3}
      />
    </ScrollView>
  );
};

export { HomeScreen };
