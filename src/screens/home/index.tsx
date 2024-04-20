import { images } from "@assets";
import { appColors, calcHeight } from "@common";
import {
  CustomHeader,
  CustomModal,
  FilterModal,
  ShipmentList,
  ShipmentsHeader,
  TwoButtonsRow,
} from "@components";
import { useOnfocusedHomeStatusBar } from "@hooks";
import {
  selectUser,
  useAppDispatch,
  useAppSelector,
  User,
  UserRootState,
} from "@store";
import { AppDispatch } from "@types";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { useModalize } from "react-native-modalize";
import { Searchbar } from "react-native-paper";
import shipmentsData from "../../store/shipmentsData.json";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const dispatch: AppDispatch = useAppDispatch();
  const { ref: modalRef, open: openModal, close: closeModal } = useModalize();
  const [checkAll, setCheckAll] = useState(false);

  // const [filteredStatuses, setFilteredStatuses] = useState([]);

  const handleFilter = (selectedStatuses: []) => {
    console.log("selectedStatuses", selectedStatuses);
    dispatch(User.setFilteredStatuses(selectedStatuses));
    // setFilteredStatuses(selectedStatuses);
    closeModal();
  };
  const userSelector: UserRootState = useAppSelector(selectUser);
  const { image, userName, userSurname } = userSelector?.user;
  const filteredStatuses = userSelector?.filteredStatuses;
  console.log("filteredStatuses", filteredStatuses);
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
      const originMatch = shipment.origin
        .toLowerCase()
        ?.includes(query.toLowerCase());
      const destinationMatch = shipment.destination
        .toLowerCase()
        ?.includes(query.toLowerCase());
      const awbMatch = shipment.awb.includes(query);
      const statusMatch = shipment.status
        .toLowerCase()
        ?.includes(query.toLowerCase()); // Include status in the search
      return originMatch || destinationMatch || awbMatch || statusMatch;
    });
    setFilteredShipments(filtered);
    setSearchQuery(query);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      nestedScrollEnabled={true}
    >
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
      <TwoButtonsRow onPressButton1={openModal} />
      <ShipmentsHeader {...{ checkAll, setCheckAll }} />
      <ShipmentList
        shipments={filteredShipments}
        filteredStatuses={filteredStatuses}
      />
      <CustomModal
        adjustToContentHeight={true}
        childrenStyle={{ paddingHorizontal: 10 }}
        // modalHeight={screenHeight * 0.75}
        ref={modalRef}
        // overlayStyle={styles.modalOverlay} // Adjust the alpha value (last parameter) to control opacity
        withOverlay={true}
        handlePosition="inside"
      >
        <FilterModal
          onCancelPress={closeModal}
          onFilter={handleFilter}
          defaultStatuses={filteredStatuses}
        />
      </CustomModal>
      {/* Pass filteredShipments to ShipmentList */}
    </ScrollView>
  );
};

export { HomeScreen };
