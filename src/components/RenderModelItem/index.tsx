import { Model } from "@interfaces";
import React, { memo } from "react";
import { ModelCard } from "../ModelCard"; // Assuming ModelCard component path

interface RenderModelItemProps {
  item: Model;
}

const RenderModelItem: React.FC<RenderModelItemProps> = memo(({ item }) => {
  return <ModelCard {...{ item }} />;
});

export { RenderModelItem };
