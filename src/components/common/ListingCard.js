import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const ListingCard = ({ property, loggedIn }) => {
  const [copy, setCopy] = useState(false);

  const getStatus = () => {
    if (property?.status === "Available") {
      return "success.main";
    } else if (property?.status === "Sold") {
      return "error.main";
    } else if (property?.status === "Re-open") {
      return "info.main";
    }
  };

  const handleCopy = (e) => {
    setCopy(true);
    e.stopPropagation();
    navigator.clipboard.writeText(
      `${window.location.origin}/viewproperty/${property.id}`
    );
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: 6,
        },
        cursor: "pointer",
        position: "relative",
        borderRadius: "10px",
        margin: "5px 0",
      }}
      variant="outlined"
    >
      <Paper
        variant="outlined"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          padding: "2px 5px",
          color: "white",
          backgroundColor: getStatus(property?.status),
        }}
      >
        {property?.status}
      </Paper>
      <CardMedia component="img" height="194" image={property?.img[0]} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left" }}
        >
          ₱ {property?.tcp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            height: "45px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {property?.propertyName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left", padding: "10px 0" }}
        >
          {property?.bedRooms}
          <IconButton aria-label="delete" size="small">
            <HotelIcon fontSize="inherit" />
          </IconButton>
          {property?.bathRooms}
          <IconButton aria-label="delete" size="small">
            <BathtubIcon fontSize="inherit" />
          </IconButton>
          {property?.lotArea}
          <IconButton aria-label="delete" size="small">
            <SquareFootIcon fontSize="inherit" />
          </IconButton>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            height: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {property?.location}
        </Typography>

        <hr />
        {loggedIn?.id && (
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" size="small">
              <FavoriteIcon fontSize="inherit" />
            </IconButton>
            <Tooltip title={copy ? "Copied" : "Copy Link"}>
              <Button aria-label="share" size="small" onClick={handleCopy}>
                <Typography>Copy link property</Typography>
              </Button>
            </Tooltip>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default ListingCard;
