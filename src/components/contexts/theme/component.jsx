import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import { THEME_LIGHT } from "./constants";
import styles from "./styles.module.scss";

export const ThemeProvider = ({ children }) => {
  const [themeValues, setThemeValues] = useState({
    name: THEME_LIGHT
  });

  const setTheme = useCallback(
    (themeValue) =>
      setThemeValues((currentState) => ({ ...currentState, ...themeValue })),
    []
  );

  useEffect(() => {
    document.documentElement.dataset.theme = themeValues.name;
  }, [themeValues.name]);

  return (
    <ThemeContext.Provider value={{ theme: themeValues, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
