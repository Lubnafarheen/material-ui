import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import AlertMessage from "./AlertMessage";

const App = () => {
  const API_URL = "http://localhost:8080/api/v1/customer";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [person, setPerson] = useState();
  const [alert, setAlert] = useState({ type: "", message: "" });

  const [selectedImage, setSelectedImage] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const getImagesFromFolder = () => {
    const imagePaths = [
      "photos/product1.jpg",
      "photos/product2.jpg",
      "photos/product3.jpg",
      "photos/product4.jpg",
      "photos/product5.jpg",
      "photos/product6.jpg",
      "photos/product7.jpg",
      "photos/product8.jpg",
      "photos/product9.jpg",
      "photos/product10.jpg",
      "photos/product11.jpg",
      "photos/product12.jpg",
      "photos/product14.jpg",
      "photos/product15.jpg",
      "photos/product16.jpg",
      "photos/product17.jpg",
      "photos/product18.jpg",
      "photos/product19.jpg",
      "photos/product20.jpg",
    ];

    const prices = [
      20, 25, 25, 30, 20, 25, 30, 25, 20, 20, 25, 20, 25, 25, 20, 20, 25, 25,
      20,
    ];
    return imagePaths.map((imagePath, index) => ({
      img: process.env.PUBLIC_URL + "/" + imagePath,
      title: `Product Number ${index + 1}`,
      price: `${prices[index]}kr`,
    }));
  };

  const imageArray = getImagesFromFolder();

  const handleViewClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  const postRequestAction = async () => {
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
        console.log("executed");
        if (response.status === 201) {
          setPerson(response.data);
          setAlert({ type: "success", message: "Post operation is done!" });
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
    <>
      <AlertMessage message={alert.message} type={alert.type} />
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6" style={{ marginLeft: "20px" }}>
            Jewelery By Lubna
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "30px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
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
        <Container
          maxWidth="md"
          style={{ marginTop: "50px", marginBottom: "30px" }}
        >
          <Grid container spacing={4}>
            {imageArray.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image.img}
                    alt={`Image ${index}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {image.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {image.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleViewClick(image)}>
                      View{" "}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer
        style={{ backgroundColor: "#1976d2", padding: "10px 0", color: "#fff" }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Jewelery By Lubna &copy; 2023
        </Typography>
      </footer>

      <Dialog open={Boolean(selectedImage)} onClose={handleCloseDialog}>
        <DialogTitle>{selectedImage?.title}</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage?.img}
            alt={selectedImage?.title}
            style={{ width: "100%" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default App;
