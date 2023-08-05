import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import AlertMessage from "./AlertMessage";

const MainSectionComponent = () => {
  const API_URL = "http://localhost:8080/api/v1/customer";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [person, setPerson] = useState();
  const [alert, setAlert] = useState({ type: "", message: "" });
   const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };


  const postRequestAction = async () => {
    if (!firstName || !lastName || !email || !mobileNo || !message) {
      setAlert({ type: "warning", message: "Please fill in all fields." });
      return;
    }
      const data = {
        firstName,
        lastName,
        email,
        mobileNo,
        message,
      };
      axios
        .post(API_URL, data)
        .then((response) => {
          console.log("post operation successful");
          if (response.status === 201) {
            setPerson(response.data);           
            setIsSubmitted(true);
          } else {
            setAlert({
              type: "warning",
              message: "Display API Error Message...",
            });
          }
        })
          .catch((error) => {
        console.log("ERROR: ", error);
        setAlert({ type: "danger", message: error.message });
      });
};
  return (
    <div>
       {alert.message && (
       <AlertMessage message={alert.message} type={alert.type} />
       )}
      <Container maxWidth="sm" style={{ marginTop: "30px" }}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Jewelery By Lubna
        </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Welcome! Explore our exquisite collection of Indian jewelry. If
              you're captivated by our pieces and wish to make a purchase, feel
              free to send us a direct message (DM).
            </Typography>
            <div>
              <Grid container justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "20px", marginLeft: "160px" }}
                    onClick={handleFormOpen}
                  >
                    If Interested, Click Here
                  </Button>
                </Grid>
              </Grid>
            </div>
            {isFormOpen && !isSubmitted && (
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <TextField
                  label="FirstName :"
                  variant="outlined"
                  margin="normal"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="LastName :"
                  variant="outlined"
                  margin="normal"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  label="Email :"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Mobile no:"
                  variant="outlined"
                  margin="normal"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                <TextField
                  label="Message :"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={postRequestAction}
                >
                  Submit
                </Button>
              </Box>
            )}

            {isSubmitted && (
              <div>
                <Typography variant="h6" align="center" gutterBottom>
                  Thank you for your submission!
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setIsFormOpen(false);
                    setIsSubmitted(false);
                  }}
                ></Button>
              </div>
            )}
       
      </Container>
    </div>
  );
};

export default MainSectionComponent;
