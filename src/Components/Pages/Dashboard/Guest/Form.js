import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { AuthContext } from "../../../../store/Auth/AuthProvider";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },

    "& .Mui-focused": {
      color: "black",
    },

    "& h1": {
      fontSize: 20,
      color: "#2D403E",
      fontWeight: "bold",
      marginTop: "50px",
    },
  },

  textField: {
    width: "100%",
    paddingBottom: 0,
    marginBottom: 20,
    marginTop: 20,
  },

  notchedOutline: {
    color: "#2D403E",
    borderWidth: "1px",
    borderColor: "#2D403E !important",
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
  const [inputFields, setInputFields] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    address: "",
    barangay: "",
    city: "",
  });

  const handleChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;

    setInputFields({
      ...inputFields,
      [field]: value,
    });
  };

  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    for (let field in inputFields) {
      if (!inputFields[field]) {
        errors.push(field);
      }
    }

    if (errors.length > 0) {
      return;
    }

    const {
      firstname,
      lastname,
      contact,
      address,
      barangay,
      city,
    } = inputFields;

    const guest = {
      firstname,
      lastname,
      contact,
      address: `${address} ${barangay} ${city} philippines`,
    };

    axios
      .post("http://localhost:8000/api/v1/dashboard/add-guest", guest, {
        headers: {
          Authorization: state.token,
        },
      })
      .then((res) => {
        console.log(res);
        setInputFields({
          firstname: "",
          lastname: "",
          contact: "",
          address: "",
          barangay: "",
          city: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Contact Information</h1>
        <TextField
          onChange={(e) => handleChange(e)}
          value={inputFields.firstname}
          required
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
        />
        <TextField
          onChange={(e) => handleChange(e)}
          value={inputFields.lastname}
          required
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
          onChange={(e) => handleChange(e)}
          value={inputFields.contact}
          required
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
          onChange={(e) => handleChange(e)}
          value={inputFields.address}
          required
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
          onChange={(e) => handleChange(e)}
          value={inputFields.barangay}
          required
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
          onChange={(e) => handleChange(e)}
          value={inputFields.city}
          required
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

        <Button
          type="submit"
          style={{
            borderRadius: 35,
            backgroundColor: "#3b8880",
            padding: "10px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
