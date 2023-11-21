import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ Title, PosterURL, Description, Rating }) => {
  return (
    <Card
      sx={{ display: "flex" }}
      className="flex hover:cursor-pointer hover:shadow max-md:w-full hover:shadow-sky-950"
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={PosterURL}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {Title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {Description}
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <FontAwesomeIcon icon={faStar} />
            {Rating}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

MovieCard.propTypes = {
  PosterURL: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Rating: PropTypes.number,
};

export default MovieCard;
