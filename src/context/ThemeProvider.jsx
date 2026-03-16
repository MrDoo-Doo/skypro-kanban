import { ThemeContext } from "./ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../theme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-style");
    if (savedTheme) {
      setTimeout(() => {
        setTheme(savedTheme);
      }, 0);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme-style", newTheme);
  };

  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
