import React, { useState, useContext } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../../../../store/Auth/AuthProvider";
import {
  AUTH_LOGIN,
  AUTH_FETCH,
  AUTH_FAIL,
} from "../../../../store/action_types";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },

    "& .Mui-focused": {
      color: "#4892ee",
    },

    "& h1": {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      marginTop: "50px",
    },
  },

  formLabel: {
    color: "#4892ee",
  },

  textField: {
    width: "100%",
    paddingBottom: 0,
    marginBottom: 20,
    marginTop: 20,
    color: "#fff",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#4892ef !important",
  },

  buttonStyle: {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      textTransform: "capitalize",
    },
  },
}));

function Form() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [inputFields, setinputFields] = useState({
    username: "",
    password: "",
  });

  console.log(new Date().toString());

  const { state, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setinputFields({
      ...inputFields,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputFields.username === "" || inputFields.password === "") return;

    dispatch({ type: AUTH_FETCH });

    const user = {
      username: inputFields.username,
      password: inputFields.password,
    };

    axios
      .post("http://localhost:8000/api/v1/authenticate/login", user)
      .then((res) => {
        const token = res.headers.authorization;
        const user = res.data.user;
        dispatch({ type: AUTH_LOGIN, payload: { token, user } });
        console.log(res);
      })
      .catch((err) => {
        setError(err.response.data.error);
        dispatch({ type: AUTH_FAIL });
      });
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>Login</h1>
      <TextField
        onChange={(e) => handleChange(e)}
        value={inputFields.firstname}
        required
        id="username"
        label="Username"
        variant="outlined"
        autoFocus
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },

          style: {
            color: "#fff",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#4892ee",
          },
        }}
      />
      <TextField
        type="password"
        onChange={(e) => handleChange(e)}
        value={inputFields.lastname}
        required
        id="password"
        label="Password"
        variant="outlined"
        className={classes.textField}
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },

          style: {
            color: "#fff",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#4892ee",
          },
        }}
      />

      <Button
        type="submit"
        style={{
          borderRadius: 35,
          backgroundColor: "#4892ee",
          padding: "10px",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
        variant="outlined"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
