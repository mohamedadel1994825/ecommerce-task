// BrandList.tsx
import { Brand } from "@interfaces";
import React, { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { CustomList } from "../CustomList";
import { Separator } from "../ListSeparator";
// import RenderBrandItem from "./RenderBrandItem";
import { RenderBrandItem } from "../RenderBrandItem";
import { styles } from "./styles";

interface BrandListProps {
  brands: Brand[];
  selectedBrand: Brand;
  setSelectedBrand: (item: Brand) => void;
}

const BrandList: React.FC<BrandListProps> = memo(
  ({ brands, selectedBrand, setSelectedBrand }) => {
    const { t } = useTranslation();

    const keyExtractor = useMemo(
      () => (item: Brand, index: number) => index.toString(),
      []
    );

    const onPress = useCallback((item: Brand) => setSelectedBrand(item), []);

    const renderBrandItem = useCallback(
      ({ item }: { item: Brand }) => {
        const isSelectedBrand = item === selectedBrand;
        return (
          <RenderBrandItem
            item={item}
            isSelected={isSelectedBrand}
            onPress={() => onPress(item)}
          />
        );
      },
      [selectedBrand]
    );

    return (
      <>
        <Text style={styles.brandTitle}>
          {t("navigation:home:shopByBrands")}
        </Text>
        <CustomList
          horizontal
          data={brands}
          renderItem={renderBrandItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => <Separator width={15} />}
        />
      </>
    );
  }
);

export { BrandList };
