// RenderBrandItem.tsx
import { Brand } from "@interfaces";
import React, { memo } from "react";
import { BrandItem } from "../../components";

interface RenderBrandItemProps {
  item: Brand;
  isSelected: boolean;
  onPress: () => void;
}

const RenderBrandItem: React.FC<RenderBrandItemProps> = memo(
  ({ item, isSelected, onPress }) => {
    return <BrandItem item={item} isSelected={isSelected} onPress={onPress} />;
  }
);

export { RenderBrandItem };
