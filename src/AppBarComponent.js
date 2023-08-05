import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const AppBarComponent = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <div data-testid="photo-camera-icon">
          <PhotoCamera />
        </div>
        <Typography variant="h6" style={{ marginLeft: "20px" }}>
          Jewelery By Lubna
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
