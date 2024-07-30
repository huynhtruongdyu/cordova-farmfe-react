import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultThemes, lightTheme } from "../themes";
import type { AppearanceContextState, Theme } from "../types";

const defaultValue: AppearanceContextState = {
  theme: lightTheme,
  setCurrentTheme: () => {},
};

const AppearanceContext = createContext<AppearanceContextState>(defaultValue);

export const useAppearanceCtx = () => useContext(AppearanceContext);

const AppearanceProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const [theme, setTheme] = useState<Theme>(defaultValue.theme);

  const setCurrentTheme = (key: string) =>
    setTheme(DefaultThemes[key] ?? defaultValue.theme);

  return (
    <AppearanceContext.Provider value={{ theme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppearanceContext.Provider>
  );
};

export default AppearanceProvider;
