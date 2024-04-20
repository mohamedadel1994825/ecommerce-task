import { images } from "@assets";
import { appColors, calcHeight } from "@common";
import {
  CustomHeader,
  ShipmentList,
  ShipmentsHeader,
  TwoButtonsRow,
} from "@components";
import { useOnfocusedHomeStatusBar } from "@hooks";
import { selectUser, useAppSelector, UserRootState } from "@store";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import shipmentsData from "../../store/shipmentsData.json";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const [checkAll, setCheckAll] = useState(false);
  const userSelector: UserRootState = useAppSelector(selectUser);
  const { image, userName, userSurname } = userSelector?.user;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShipments, setFilteredShipments] = useState(shipmentsData);

  const searchbarInputStyle = {
    borderColor: searchQuery ? "green" : "red", // Change border color based on text input state
    color: searchQuery ? appColors.appColor : appColors.black, // Change text input color based on text input state
  };
  const searchbarStyle = {
    borderWidth: searchQuery ? 1 : 0,
    borderColor: searchQuery ? appColors.appColor : appColors.black,
    color: searchQuery ? appColors.appColor : appColors.black,
    backgroundColor: appColors.gray,
    borderRadius: calcHeight(10),
    height: calcHeight(50),
  };

  // Function to filter shipments based on search query
  const handleSearch = (query: string) => {
    const filtered = shipmentsData.filter((shipment) => {
      const originMatch = shipment.origin.toLowerCase().includes(query.toLowerCase());
      const destinationMatch = shipment.destination.toLowerCase().includes(query.toLowerCase());
      const awbMatch = shipment.awb.includes(query);
      const statusMatch = shipment.status.toLowerCase().includes(query.toLowerCase()); // Include status in the search
      return originMatch || destinationMatch || awbMatch || statusMatch;
    });
    setFilteredShipments(filtered);
    setSearchQuery(query);
  };
  
  
  

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <CustomHeader
        leftImageSource={image}
        centerImageSource={images.shipexBlue}
        notificationIcon={"notifications-outline"}
        userName={userName + " " + userSurname}
      />
      <View style={{ marginTop: calcHeight(12) }}>
        <Searchbar
          inputMode="search"
          inputStyle={searchbarInputStyle}
          style={searchbarStyle}
          placeholder="Search"
          onChangeText={handleSearch} // Pass handleSearch function to onChangeText
          value={searchQuery}
          iconColor={searchQuery ? appColors.appColor : appColors.black}
        />
      </View>
      <TwoButtonsRow />
      <ShipmentsHeader {...{ checkAll, setCheckAll }} />
      <ShipmentList shipments={filteredShipments} />
      {/* Pass filteredShipments to ShipmentList */}
    </ScrollView>
  );
};

export { HomeScreen };
