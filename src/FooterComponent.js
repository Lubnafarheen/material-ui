import React from "react";
import Typography from "@mui/material/Typography";

const FooterComponent = () => {
  return (
    <div data-testid="footer-text">
      <footer
        style={{ backgroundColor: "#1976d2", padding: "10px 0", color: "#fff" }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Jewelery By Lubna &copy; 2023
        </Typography>
      </footer>
    </div>
  );
};

export default FooterComponent;
