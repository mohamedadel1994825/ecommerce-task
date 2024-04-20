import { images } from "@assets";
import { appColors } from "@common";
import { CustomImage } from "@components";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
interface ShipmentCardProps {
  origin: string;
  destination: string;
  awb: string;
  tripId: string;
  status: string;
  originStreet: string;
  destinationStreet: string;
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({
  origin,
  destination,
  awb,
  tripId,
  status,
  originStreet,
  destinationStreet,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isDelivered = status === "Delivered";

  // Check if status is 'RECEIVED'
  const isReceived = status === "RECEIVED";

  // Check if status is 'ERROR'
  const isError = status === "ERROR";

  // Check if status is 'CANCELED'
  const isCanceled = status === "CANCELED";

  // Check if status is 'ON HOLD'
  const isOnHold = status === "ON HOLD";

  const statusColor = {
    color: isDelivered
      ? appColors.darkGreen
      : isError
      ? appColors.appRed
      : isCanceled
      ? appColors.black2
      : isOnHold
      ? appColors.orange
      : appColors.appColor,
    backgroundColor: isDelivered
      ? appColors.lightGreen1
      : isError
      ? appColors.lightPink
      : isCanceled
      ? appColors.appLightGrey
      : isOnHold
      ? appColors.orangeLight
      : appColors.blueSky,
  };
  return (
    <View style={[styles.container, isChecked && styles.checked]}>
      <View
        style={[styles.firstCard, { borderBottomWidth: isExpanded ? 3 : 0 }]}
      >
        <TouchableOpacity onPress={handleCheck}>
          <Icon
            name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
            type="material-community"
            color={isChecked ? appColors.appColor : appColors.graySubtitle}
            size={24}
          />
        </TouchableOpacity>
        <CustomImage source={images.user} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.awbText}>{awb}</Text>
          <Text style={styles.boldText}>{tripId}</Text>
          <View style={styles.locationContainer}>
            <Text>{origin}</Text>
            <Icon name="arrow-forward" color={appColors.appColor} size={18} />
            <Text>{destination}</Text>
          </View>
        </View>
        <Text style={[styles.receivedText, statusColor]}>{status}</Text>
        <TouchableOpacity onPress={handleExpand}>
          <Icon
            name={isExpanded ? "chevron-up" : "chevron-down"}
            type="material-community"
            color={isExpanded ? "blue" : "black"}
            size={24}
          />
        </TouchableOpacity>
      </View>
      {isExpanded && (
        <View style={styles.secondCard}>
          <View style={[styles.row, { alignItems: "center" }]}>
            <View style={styles.rowItem}>
              <Text style={styles.blueText}>Origin</Text>
              <Text style={styles.origin}>{origin}</Text>
              <Text>{originStreet}</Text>
            </View>
            <Icon name="arrow-forward" color={appColors.appColor} size={24} />
            <View style={styles.rowItem}>
              <Text style={styles.blueText}>Destination</Text>
              <Text style={styles.origin}>{destination}</Text>
              <Text>{destinationStreet}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.buttonsCont]}>
            <TouchableOpacity style={[styles.button, { marginRight: 15 }]}>
              <Icon name="phone" color={appColors.white} />
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: appColors.green }]}
            >
              <MaterialCommunityIcons
                name="whatsapp"
                color={appColors.white}
                size={24}
              />
              <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export { ShipmentCard };
