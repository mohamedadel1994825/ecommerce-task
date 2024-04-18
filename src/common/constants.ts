/* eslint-disable react/react-in-jsx-scope */
import { images } from "@assets";
import { translate } from "@language";

export const Constants = {
  languageCode: "en",
  DynamicParams: null,
  matter_logo:
    "https://firebasestorage.googleapis.com/v0/b/lyfe-e91b0.appspot.com/o/matter-logo.png?alt=media&token=bb6990e0-f0e0-4839-a044-65cb854111e5",
  car_types: {
    1: {
      vehicleTypeId: "1",
      title: "Electric Car",
      image: images.electricScooter,
    },
    2: {
      vehicleTypeId: "2",
      title: "Electric Scooter",
      image: images.electricScooter,
    },
    3: {
      vehicleTypeId: "3",
      title: translate("Kickscooter"),
      image: images.electricScooter,
    },
    4: {
      vehicleTypeId: "4",
      title: translate("Bike"),
      image: images.mountainBike,
    },
  },
};

export const getParamsForVehicle = (vehicleType) => {
  if (vehicleType == "scooter") {
    return "SCOOTER";
  }
  if (vehicleType == "bicycle") {
    return "BIKE";
  }
  return "SCOOTER";
};

// Firebase/Firestore

// Kick scooter type name
export const FIRESTORE_SCOOTER = "SCOOTER";
export const RESERVE_RIDE_WITHIN_METERS = "500";
// Kick bike type name
export const FIRESTORE_BIKE = "BIKE";
export const AXIOS_TIMEOUT = 100000
export const THROTTLE_TIMEOUT_H = 1000000
export const THROTTLE_TIMEOUT_M = 100000
export const THROTTLE_TIMEOUT_L = 1000
export const rideTypes = {
  START_RIDE: "start_ride",
  CARD_RIDE: "card_ride",
  GROUP_RIDE: "group_ride"
}
export default Constants;
