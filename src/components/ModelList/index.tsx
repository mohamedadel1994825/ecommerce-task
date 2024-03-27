import { Model } from "@interfaces";
import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { CustomList, RenderModelItem } from "../../components";
import { styles } from "./styles";

interface ModelListProps {
  models: Model[];
}

const ModelList: React.FC<ModelListProps> = memo(({ models }) => {
  const { t } = useTranslation();
  // Memoize the key extractor function to prevent unnecessary re-renders
  const keyExtractor = useMemo(
    () => (item: Model, index: number) => index.toString(),
    []
  );

  return (
    <>
      <Text testID="shop-by-models" style={styles.modelTitle}>
        {t("navigation:home:shopByModels")}
      </Text>
      <CustomList
        testID="custom-list"
        style={styles.listStyle}
        contentContainerStyle={styles.modelListContainer}
        data={models}
        renderItem={({ item }) => <RenderModelItem item={item} />}
        keyExtractor={keyExtractor}
        numColumns={3}
      />
    </>
  );
});
export { ModelList };
