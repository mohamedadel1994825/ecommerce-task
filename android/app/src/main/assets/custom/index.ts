import { Platform } from "react-native";
import i18n from "i18n-js";

const DEFAULT = {
  // Both
  appColorLight: "TheSansArabic-Light",
  appColorSemiBold: "TheSansArabic-SemiBold",
  appColorBold: "TheSansArabic-Bold",
  // English
  SecondaryLightEn: "century-gothic-light",
  SecondaryBoldEn: "CenturyGothic-Bold",
  SecondaryItalicEn: "CenturyGothic-Italic",
  CenturyRegularEn: "CenturyGothic",
  // Arabic
  SecondaryLightAr: "Arial",
  SecondaryBoldAr: "Arial Bold",
};

let AppFonts = {
  appColorLight: DEFAULT.appColorLight,
  appColorSemiBold: DEFAULT.appColorSemiBold,
  appColorBold: DEFAULT.appColorBold,
  SecondaryLight: DEFAULT.SecondaryLightAr,
  SecondaryBold: DEFAULT.SecondaryBoldAr,
  CenturyRegular: DEFAULT.CenturyRegularEn,
  SecondaryItalic: DEFAULT.SecondaryItalicEn,
};

if (i18n.currentLocale() === "en") {
  AppFonts = {
    appColorLight: DEFAULT.appColorLight,
    appColorSemiBold: DEFAULT.appColorSemiBold,
    appColorBold: DEFAULT.appColorBold,
    SecondaryLight: DEFAULT.SecondaryLightEn,
    SecondaryBold: DEFAULT.SecondaryBoldEn,
    SecondaryItalic: DEFAULT.SecondaryItalicEn,
    CenturyRegular: DEFAULT.CenturyRegularEn,
  };
}

const Fonts = Platform.select({
  ios: AppFonts,
  android: AppFonts,
});

export  {Fonts};
