import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import InputField from "./InputField";

// Creating an AddMovie component that will pop up a Material UI dialog for user to enter details of new movie
const AddMovie = ({ handleClickOpen, handleClose }) => {
  return (
    // When handleclickopen is true, dialog box displays. handleclickopen is a fxn defined in movielist
    <Dialog open={handleClickOpen} onClose={handleClose}>
      <DialogTitle>Add New Movie</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill out fields below to add a new Movie:
        </DialogContentText>
        <InputField label={"Movie Title"} id="name" />
        <InputField label={"Movie Description"} id="description" />
        <InputField label={"Movie Poster URL"} id="posterURL" />
        <InputField label={"Movie Rating"} id="rating" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add Movie</Button>
      </DialogActions>
    </Dialog>
  );
};

// proptypes for this component:
AddMovie.propTypes = {
  handleClickOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default AddMovie;
