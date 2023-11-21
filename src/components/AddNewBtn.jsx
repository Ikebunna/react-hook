import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

const AddNewBtn = ({ handleClickOpen }) => {
  return (
    <Button onClick={handleClickOpen}>
      <FontAwesomeIcon icon={faSquarePlus} size="10x" />
    </Button>
  );
};

export default AddNewBtn;
