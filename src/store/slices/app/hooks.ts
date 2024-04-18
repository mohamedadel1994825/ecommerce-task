import { dark, light, sedra } from "@theme";

export const selectTheme = (themeType: string) => {
    switch (themeType) {
        case "light":
            return light;
        case "sedra":
            return sedra;
        case "dark":
        default:
            return dark;
    }
};