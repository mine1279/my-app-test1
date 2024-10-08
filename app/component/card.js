import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import { useState } from 'react';

const RecipeCard = ({ title, image, time, servings }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        width: 300,
        minHeight: 400,
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden', 
      }}
      onMouseEnter={() => setHovered(true)}  
      onMouseLeave={() => setHovered(false)} 
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out', 
            transform: hovered ? 'scale(1.1)' : 'scale(1)', 
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {time} mins | {servings} servings
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
