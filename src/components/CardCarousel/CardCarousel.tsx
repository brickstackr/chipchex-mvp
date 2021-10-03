import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Pagination } from '@mui/material';

export default function CardCarousel() {
  return (
    <Box>
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="demo-images/demo1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Pagination count={10} variant="outlined" color="primary" />
    </Box>
  );
}