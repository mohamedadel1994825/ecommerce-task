// FilterModal.tsx

import { appColors, calcHeight, calcWidth } from "@common";
import { FilterHeader } from "@components";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

const statuses = ["Delivered", "RECEIVED", "ERROR", "CANCELED", "ON HOLD"];

const FilterModal = ({ onFilter, defaultStatuses, onCancelPress }) => {
  const [selectedStatuses, setSelectedStatuses] = useState(
    defaultStatuses ?? []
  );
  const handleToggleStatus = (status) => {
    if (selectedStatuses?.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  const handleDone = () => {
    onFilter(selectedStatuses);
  };

  return (
    <View>
      <FilterHeader
        title="Filters"
        onDonePress={handleDone}
        onCancelPress={onCancelPress}
      />
      <Text style={{ marginVertical: 15 }}>SHIPMENT STATUS</Text>
      {/* <View style={{ height: calcHeight(300), flexWrap: "wrap" }}>
        {statuses.map((status) => (
          <Button
            key={status}
            title={status}
            onPress={() => handleToggleStatus(status)}
            color={selectedStatuses?.includes(status) ? "green" : null}
          />
        ))}
      </View> */}
      <View
        style={{
          height: calcHeight(300),
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {statuses.map((status) => (
          <Button
            type="outline"
            key={status}
            title={status}
            onPress={() => handleToggleStatus(status)}
            buttonStyle={{
              width: calcWidth(100),
              borderColor: selectedStatuses?.includes(status)
                ? appColors.appColor
                : appColors.transparent,
              margin: 10,
              borderRadius: 10,
              backgroundColor: appColors.gray,
            }}
            titleStyle={{
              color: selectedStatuses.includes(status)
                ? appColors.blueLight
                : appColors.appGrey,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export { FilterModal };
