import type { Theme } from "../types";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

export { lightTheme, darkTheme };

export type Themes = Record<string, Theme>;

export const DefaultThemes: Themes = {
  dark: darkTheme,
  light: lightTheme,
};
