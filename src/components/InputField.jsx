import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputField = ({ label, id }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id={id}
      label={label}
      fullWidth
      variant="standard"
    />
  );
};

InputField.propTypes = {};

export default InputField;
