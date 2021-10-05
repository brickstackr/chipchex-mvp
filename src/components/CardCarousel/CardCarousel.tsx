import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Pagination } from '@mui/material';
import { Grid } from '@mui/material';

export default function CardCarousel() {
  return (
    <>
    <Box>
          <Card sx={{ maxWidth: 800 }}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height="500"
                      image="demo-images/demo1.jpg"
                      alt="green iguana" />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          Siemens PLC
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          Siemens PLC for industrial automation
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
      </Box>
      <Grid p={1}>
              <Pagination count={3} variant="outlined" color="primary" />
        </Grid>
        </>
  );
}