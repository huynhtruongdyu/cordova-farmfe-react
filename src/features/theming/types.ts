export interface Theme {
  // Common
  border: string;
  // Fonts
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  // Colors
  editorBgColor: string;
  sidebarBgColor: string;
  fgColor: string;
}

export type AppearanceContextState = {
  theme: Theme;
  setCurrentTheme: (key: string) => void;
};
