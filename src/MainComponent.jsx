import React from "react";
import AppBarComponent from "./AppBarComponent";
import MainSectionComponent from "./MainSectionComponent";
import PhotoGrid from "./PhotoGrid";
import FooterComponent from "./FooterComponent";
import { CssBaseline } from "@mui/material";

const MainComponent = () => {
  return (
    <>
      <CssBaseline />
      <AppBarComponent />
      <MainSectionComponent />
      <PhotoGrid />
      <FooterComponent />
    </>
  );
};

export default MainComponent;
