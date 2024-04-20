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
  filteredStatuses: {
    status: string;
  }[];
}

const ShipmentList: React.FC<ShipmentListProps> = ({
  shipments,
  filteredStatuses,
}) => {
  // Filter shipments based on the selected statuses
  const filteredShipments = shipments?.filter((shipment) =>
    filteredStatuses?.includes(shipment.status)
  );
  console.log("filteredStatuses", filteredStatuses);
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
      extraData={filteredStatuses?.length}
      data={filteredShipments.length ? filteredShipments : shipments}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export { ShipmentList };
