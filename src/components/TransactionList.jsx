import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

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
  borderB: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0.7),
  },
  paper: {
    borderRight: "5px solid red",
    marginTop: theme.spacing(-0.5),
    padding: theme.spacing(1),
    width: theme.spacing(48),
    marginRight: theme.spacing(6),
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

export const TransactionList = () => {
  const classes = useStyle();
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <Grid item xs={12} lg={12} md={12} sm={12}>
        <div className={classes.root} xs={11} lg={11} md={11} sm={11}>
          <Typography variant="h6" align="left">
            History
          </Typography>
          <Box className={classes.borderB} borderBottom={2} color="#00c853" />
        </div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </Grid>
    </>
  );
};
