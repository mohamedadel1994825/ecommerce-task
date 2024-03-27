// BrandList.tsx
import { Brand, Category } from "@interfaces";
import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { CustomList } from "../CustomList";
import { Separator } from "../ListSeparator";
// import RenderBrandItem from "./RenderBrandItem";
import productsData from "../../store/productsData.json";
import { CategoryItem } from "../CategoryItem";
import { styles } from "./styles";
interface BrandListProps {
  selectedCategory: Category;
  setSelectedCategory: (item: Category) => void;
  setSelectedBrand: (item: Brand) => void;
}

const CategoryList: React.FC<BrandListProps> = memo(
  ({ selectedCategory, setSelectedCategory, setSelectedBrand }) => {
    const { t } = useTranslation();

    const keyExtractor = useMemo(
      () => (item: Category, index: number) => index.toString(),
      []
    );

    const onPress = useCallback((item: Category) => {
      setSelectedCategory(item);
      setSelectedBrand(item.brands[0]);
    }, []);

    const renderCategoryItem = useCallback(
      ({ item }: { item: Category }) => {
        const isSelectedCategory = item == selectedCategory;
        return (
          <CategoryItem
            item={item}
            isSelected={isSelectedCategory}
            onPress={() => onPress(item)}
          />
        );
      },
      [selectedCategory]
    );

    return (
      <>
        <Text style={styles.categoryTitle}>
          {t("navigation:home:categories")}
        </Text>
        <CustomList // Use the CustomList component here
          horizontal
          data={productsData}
          renderItem={renderCategoryItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={Separator}
        />
        <View style={styles.categoryItemIndicator} />
      </>
    );
  }
);

export { CategoryList };
