import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { DarkMode } from "./darkMode";

const useStyle = makeStyles((theme) => ({
  borderB: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0.7),
  },
  box_text: {
    fontWeight: "Bold",
    marginLeft: "10%",
  },
  box_amount: {
    //
  },
  GridC: {
    width: "100%",
    marginTop: theme.spacing(1),
    paddingTop: "20px",
  },
}));

export const Header = () => {
  const classes = useStyle();

  return (
    <Grid container className={classes.GridC}>
      <Grid item xs={11} lg={11} md={11} sm={11}>
        <Box fontSize={20} className={classes.box_text}>
          Hi Expense Tracker
        </Box>
      </Grid>
      <Grid item xs={1} lg={1} md={1} sm={1}>
        <Box fontSize={20} className={classes.box_amount}>
          <DarkMode />
        </Box>
      </Grid>
    </Grid>
  );
};
