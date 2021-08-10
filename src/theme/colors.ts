import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#fc6100",
  primaryBright: "#ff8e47",
  primaryDark: "#fc6100",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#fc6100",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#000000",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0e0d06",
  input: "#0e0d06",
  inputBorder: "#cccccc",
  primaryDark: "#fc6100",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FC6100",
  borderColor: "#524B63",
  card: "#070415",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
