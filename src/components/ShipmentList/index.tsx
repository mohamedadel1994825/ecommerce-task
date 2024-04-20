import React from "react";
import { CustomList } from "../CustomList";
import { ShipmentCard } from "../ShipmentCard";

interface ShipmentListProps {
  shipments: {
    origin: string;
    destination: string;
    awb: string;
    tripId: string;
    status: string;
    originStreet: string;
    destinationStreet: string;
  }[];
}

const ShipmentList: React.FC<ShipmentListProps> = ({ shipments }) => {
  const renderItem = ({ item }: { item: (typeof shipments)[0] }) => {
    return (
      <ShipmentCard
        origin={item.origin}
        destination={item.destination}
        awb={item.awb}
        tripId={item.tripId}
        status={item.status}
        originStreet={item.originStreet}
        destinationStreet={item.destinationStreet}
      />
    );
  };

  return (
    <CustomList
      data={shipments}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export { ShipmentList };
