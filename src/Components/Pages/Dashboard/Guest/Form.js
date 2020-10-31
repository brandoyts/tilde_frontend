import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },

    "& h1": {
      fontSize: 20,
      color: "#425c59",
      fontWeight: "bold",
      marginTop: "50px",
    },
  },

  textField: {
    width: "100%",
    height: "50px",
    paddingBottom: 0,
    marginBottom: 20,
    marginTop: 20,
    outline: "red",
    outlined: {
      borderColor: "red",
      "&$focused": {
        /* … */
      },
    },
  },

  notchedOutline: {
    color: "#425c59",
    borderWidth: "1px",
    borderColor: "#425c59 !important",
  },

  floatingLabelFocusStyle: {
    // background: "red",
  },

  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold",
        },
      },

      focused: {},
    },
  },
}));

function Form() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="firstname"
        label="First name"
        variant="outlined"
        autoFocus
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
        InputLabelProps={{
          className: classes.floatingLabelFocusStyle,
        }}
      />
      <TextField
        id="lastname"
        label="Last name"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <TextField
        id="contact"
        label="Contact No."
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <h1>Permanent Address</h1>
      <TextField
        id="address"
        label="House No. And Street"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <TextField
        id="barangay"
        label="Barangay"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
      <TextField
        id="city"
        label="City"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
      />
    </form>
  );
}

export default Form;
