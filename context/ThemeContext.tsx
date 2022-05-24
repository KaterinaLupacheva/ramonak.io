import React, { ReactNode, useEffect } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../styles/theme";

type ThemeState = {
  themeVariant: DefaultTheme["variant"];
  setThemeVariant: (theme: DefaultTheme["variant"]) => void;
};
type ThemeProviderProps = { children: any };

const CustomThemeContext = React.createContext<ThemeState | undefined>(
  undefined
);

function CustomThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [themeVariant, setThemeVariant] =
    React.useState<DefaultTheme["variant"]>("light");

  const theme = themeVariant === "dark" ? darkTheme : lightTheme;

  const value = { themeVariant, setThemeVariant };

  useEffect(() => {
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      setThemeVariant("dark");
  }, []);

  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

function useThemeContext(): ThemeState {
  const context = React.useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
}

export { CustomThemeProvider, useThemeContext };
