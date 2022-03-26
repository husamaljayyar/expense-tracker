import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { GlobalContext } from "../context/GlobalState";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      marginTop: theme.spacing(1),
      width: theme.spacing(48),
    },
  },
  paper: {
    marginTop: theme.spacing(-0.5),
    padding: theme.spacing(1),
    width: theme.spacing(48),
    marginRight: theme.spacing(6),
  },
  paperTow: {
    borderRight: "5px solid red",
  },
  box_text: {
    marginRight: theme.spacing(17),
  },
  box_amount: {
    marginLeft: theme.spacing(6),
  },
  ClearIcon: {
    background: "red",
  },
  rootTow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginTop: theme.spacing(1),
      width: theme.spacing(60),
    },
  },
  clearIcon: {
    display: "none",
    marginLeft: "-0.2%",
  },
  GridClearIcon: {
    "&:hover #clearIcon ": {
      display: "block",
      color: "red",
      position: "absolute",
    },
  },
}));

export const Transaction = ({ transaction }) => {
  const classes = useStyle();
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div className={classes.rootTow}>
      <Grid container className={classes.GridClearIcon}>
        <Grid item xs>
          <IconButton
            aria-label="add an alarm"
            className={classes.clearIcon}
            id="clearIcon"
            onClick={() => deleteTransaction(transaction.id)}
          >
            <ClearIcon />
          </IconButton>
        </Grid>

        <Grid item xs>
          <Paper
            elevation={5}
            className={classes.paper}
            style={
              transaction.amount < 0
                ? { borderRight: "5px solid red" }
                : { borderRight: "5px solid #00c853" }
            }
          >
            <Grid container>
              <Grid item xs className={classes.box_text}>
                <Box fontSize={20}>{transaction.text}</Box>
              </Grid>
              <Grid item xs>
                <Box fontSize={20} className={classes.box_amount}>
                  {sign}${Math.abs(transaction.amount)}
                </Box>
              </Grid>
              <Box
                className={classes.borderB}
                borderBottom={2}
                color="#C0C0C0"
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
