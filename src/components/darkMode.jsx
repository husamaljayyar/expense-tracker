import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useDarkMode from "../styles/useDarkMode";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

export const DarkMode = (props) => {
  const [theme, toggleTheme] = useDarkMode();

  const Theme = createMuiTheme({
    palette: {
      type: theme === "dark" ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <IconButton onClick={toggleTheme} size="small">
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </ThemeProvider>
  );
};
