import React, { useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import { TextField, makeStyles, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { GlobalContext } from "../context/GlobalState";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Styles = {
  fontWeight: 600,
  maxLength: 20,
  color: "#FFF",
  border: "1px solid #FFF",
  outline: "none",
  borderRadius: "5px",
};

const useStyle = makeStyles((Theme) => ({
  root: {
    // contenaire
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: Theme.spacing(2),
    // inside container
    "& > *": {
      marginTop: Theme.spacing(1),
      width: Theme.spacing(48),
    },
  },
  Form: {
    "& > *": {
      marginTop: Theme.spacing(0.6),
    },
  },
  borderB: {
    marginTop: Theme.spacing(0),
  },
  amountt: {
    //
  },
}));

const Themes = createMuiTheme({
  palette: {
    primary: {
      main: "#00c853",
    },
  },
});

export const AddTransaction = (props) => {
  const classes = useStyle();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Id number random
      text,
      amount: +amount, // the transfer From String To Int (+amount)
    };
    addTransaction(newTransaction);
  };

  return (
    <ThemeProvider theme={Themes}>
      <Grid item className={classes.root} xs={12} lg={12} md={12} sm={12}>
        <div className={classes.root}>
          <Typography variant="h6" align="left">
            Add new transaction
          </Typography>
          <Box className={classes.borderB} borderBottom={2} color="#00c853" />
          <form
            onSubmit={onSubmit}
            className={classes.Form}
            noValidate
            autoComplete="off"
          >
            <Typography align="left">Text</Typography>

            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              fullWidth
              id="filled-basic"
              type="text"
              size="small"
              variant="outlined"
              placeholder="Enter text..."
              required
              inputProps={{ style: { ...Styles } }}
            />
            <Typography align="left">
              Amount (negative - expense,positive - income)
            </Typography>

            <TextField
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              id="outlined-basic"
              type="number"
              size="small"
              variant="outlined"
              placeholder="Enter amount..."
              required
              inputProps={{ style: { ...Styles } }}
            />

            <Button
              onClick={onSubmit}
              className={classes.coco}
              variant="contained"
              fullWidth
              href="#text-buttons"
              size="large"
              style={{
                background: "#00c853",
                fontWeight: 600,
                fontSize: 15,
                marginTop: 20,
                color: "#fafafa",
              }}
            >
              Add transaction
            </Button>
          </form>
        </div>
      </Grid>
    </ThemeProvider>
  );
};
