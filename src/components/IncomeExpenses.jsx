import React, { useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(2),

      "& > *": {
        width: theme.spacing(48),
        height: theme.spacing(12),
      },
    },
    money: {
      paddingTop: theme.spacing(0.5),
    },
    container: {
      marginTop: theme.spacing(2),
    },
  })
);

const defaultProps = {
  style: {
    height: "4rem",
    marginTop: 2,
  },
  borderColor: "#00c853",
};

export const IncomeExpenses = () => {
  const classes = useStyles();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <Grid item className={classes.root} xs={12} lg={12} md={12} sm={12}>
        <Paper elevation={5}>
          <div className={classes.container}>
            <Grid container>
              <Grid item xs>
                <Box fontWeight={600} fontSize={21}>
                  Income
                </Box>
                <Box
                  className={classes.money}
                  fontSize={21}
                  fontWeight={600}
                  color="#00c853"
                >
                  {income}
                </Box>
              </Grid>
              <Box borderLeft={2} {...defaultProps} />
              <Grid item xs>
                <Box fontWeight={600} fontSize={21}>
                  Expenses
                </Box>
                <Box
                  className={classes.money}
                  fontSize={21}
                  fontWeight={600}
                  color="#00c853"
                >
                  {expenses}
                </Box>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </>
  );
};
