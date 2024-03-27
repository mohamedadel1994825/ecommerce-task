import { Model } from "@interfaces";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { styles } from "./styles";

const ModelCard: React.FC<Model> = memo(({ item }) => {
  const { name, image, availableProducts, quantity, space, color } = item;

  return (
    <TouchableOpacity testID="model-card" style={styles.container}>
      <FastImage
        testID="model-image"
        resizeMode={FastImage.resizeMode.contain}
        source={{ uri: image }}
        style={styles.image}
      />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.detailsText}>
        {space} | {color}
      </Text>
      <Text style={styles.availableProductsText}>{availableProducts}</Text>
      <Text style={styles.quantityText}>{quantity}</Text>
    </TouchableOpacity>
  );
});

export { ModelCard };
