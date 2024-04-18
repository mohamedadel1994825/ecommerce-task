export const images = {
  groupRideSurvey: require("./groupRideSurvey.webp"),
  imageScooter: require("./scooter.webp"),
  imageBike: require("./Transparent-Bike.webp"),
  bikeBlack: require("./vehicle/bike.webp"),
  bikeWhite: require("./bikeWhite.png"),
  kickscooterBlack: require("./vehicle/kickscooter.webp"),
  kickscooterWhite: require("./kickscooterWhite.png"),
  mobilePayment: require("./mobilePayment.png"),
  groupRide: require("./groupRide.png"),
  manThinking: require("./manThinking.png"),
  addPackage: require("./addPackage.webp"),
  addPackageDark: require("./addPackageDark.webp"),
  hand: require("./hand.webp"),
  shuttle: require("./shuttle.webp"),
  paymentSuccess: require("./paymentSuccess.png"),
  paymentFailure: require("./paymentFailure.png"),
  darkHand: require("./darkHand.webp"),
  masterCard: require("./masterCard.webp"),
  madaPay: require("./madaPay.webp"),
  madaPayDark: require("./madaPayDark.webp"),
  applePay: require("./applePay.webp"),
  applePayDark: require("./applePayDark.webp"),
  stcPay: require("./stcPay.webp"),
  stcPayDark: require("./stcPayDark.webp"),
  visa: require("./visa.webp"),
  logoPrimary: require("./logo-primary.webp"),
  path: require("./path.webp"),
  percentage: require("./percentage.webp"),
  human: require("./human.webp"),
  gazal: require("./gazal.webp"),
  markerCurrentLocation: require("./pin.webp"),
  menu: require("./action_menu.webp"),
  notification: require("./bell.webp"),
  setting: require("./settings.webp"),
  back: require("./back.webp"),
  logo: require("./logo-primary.webp"),
  camera: require("./camera.webp"),
  female: require("./female.webp"),
  lock: require("./bike-lock.webp"),
  scan: require("./scan.webp"),
  saudiaFlag: require("./saudiaFlag.png"),
  mountainBike: require("./mountain-bike.webp"),
  englishLogo: require("./englishLogo.png"),
  emptyPackages: require("./emptyPackages.png"),
  male: require("./male.webp"),
  mobily: require("./mobily.webp"),
  qrScanner: require("./qrScanner.webp"),
  location: require("./location.webp"),
  gazalLogoWhite: require("./gazalLogoWhite.png"),
  electricScooter: require("./electricScooter.webp"),
  onboarding1: require("./onboarding1.webp"),
  onboarding2: require("./onboarding2.webp"),
  onboarding3: require("./onboarding3.webp"),
  roshenLogo: require("./roshenLogo.png"),
  curve: require("./curve.webp"),
  roshenEn: require("./roshenEn.png"),
  themeLogoRashon: require("./themeLogoRashon.jpg"),
  rideMarker: {
    background: require("./marker-background.webp"),
    bike: require("./vehicle/bike.webp"),
    kickscooter: require("./vehicle/kickscooter.webp"),
  },
};

const baseLink = "https://firebasestorage.googleapis.com/v0/b/gazalappdb.appspot.com/o/assets%2F";

interface RideMarker {
  background: string;
  bike: string;
  kickscooter: string;
}

interface Images {
  groupRideSurvey: string;
  imageScooter: string;
  imageBike: string;
  bikeBlack: string;
  bikeWhite: string;
  bikeTerritory: string
  curve: string
  scooterTerritory: string
  kickscooterBlack: string;
  kickscooterWhite: string;
  mobilePayment: string;
  groupRide: string;
  manThinking: string;
  addPackage: string;
  addPackageDark: string;
  hand: string;
  shuttle: string;
  paymentSuccess: string;
  paymentFailure: string;
  darkHand: string;
  masterCard: string;
  madaPay: string;
  madaPayDark: string;
  applePay: string;
  applePayDark: string;
  stcPay: string;
  stcPayDark: string;
  visa: string;
  logoPrimary: string;
  path: string;
  percentage: string;
  human: string;
  gazal: string;
  markerCurrentLocation: string;
  menu: string;
  notification: string;
  setting: string;
  back: string;
  logo: string;
  camera: string;
  female: string;
  lock: string;
  scan: string;
  saudiaFlag: string;
  mountainBike: string;
  englishLogo: string;
  emptyPackages: string;
  male: string;
  mobily: string
  themeLogoRashon: string
  roshenLogo: string
  update: string
  roshenEn: string
  rideMarker: RideMarker;
}

const initializeImageUrls = (images: Images): Images => {
  for (const key in images) {
    if (typeof images[key] === 'string') {
      images[key] = baseLink + images[key] + "?alt=media";
    } else {
      initializeImageUrls(images[key] as Images);
    }
  }

  return images;
};

export const onlineImages = initializeImageUrls({
  groupRideSurvey: "groupRideSurvey.webp",
  imageScooter: "scooter.webp",
  imageBike: "Transparent-Bike.webp",
  bikeBlack: "bike.webp",
  bikeWhite: "bikeWhite.png",
  curve: "curve.webp",
  kickscooterBlack: "kickscooter.webp",
  kickscooterWhite: "kickscooterWhite.png",
  mobilePayment: "mobilePayment.png",
  groupRide: "groupRide.png",
  manThinking: "manThinking.png",
  addPackage: "addPackage.webp",
  addPackageDark: "addPackageDark.webp",
  bikeTerritory: "bike-territory.gif",
  scooterTerritory: "scooter-territory.gif",
  hand: "hand.webp",
  shuttle: "shuttle.webp",
  paymentSuccess: "paymentSuccess.png",
  paymentFailure: "paymentFailure.png",
  darkHand: "darkHand.webp",
  masterCard: "masterCard.webp",
  madaPay: "madaPay.webp",
  madaPayDark: "madaPayDark.webp",
  applePay: "applePay.webp",
  applePayDark: "applePayDark.webp",
  stcPay: "stcPay.webp",
  stcPayDark: "stcPayDark.webp",
  visa: "visa.webp",
  logoPrimary: "logo-primary.webp",
  path: "path.webp",
  percentage: "percentage.webp",
  human: "human.webp",
  gazal: "gazal.webp",
  markerCurrentLocation: "pin.webp",
  menu: "action_menu.webp",
  notification: "bell.webp",
  setting: "settings.webp",
  back: "back.webp",
  camera: "camera.webp",
  female: "female.webp",
  lock: "lock.gif",
  scan: "scan.webp",
  saudiaFlag: "saudiaFlag.png",
  mountainBike: "mountain-bike.webp",
  englishLogo: "englishLogo.png",
  emptyPackages: "emptyPackages.png",
  male: "male.webp",
  update: "update.webp",
  roshenLogo: "roshenLogo.png",
  themeLogoRashon: "themeLogoRashon.jpg",
  roshenEn: "roshenEn.png",
  rideMarker: {
    background: "marker-background.webp",
    bike: "bike.webp",
    kickscooter: "kickscooter.webp",
  },
  // your image paths here
} as Images);


