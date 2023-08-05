import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

const PhotoGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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

        return (
        <div>
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
            
        </div>
    );
};

export default PhotoGrid;