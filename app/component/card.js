// components/RecipeCard.js
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
        overflow: 'hidden', // ซ่อนส่วนที่เกินออกมา
      }}
      onMouseEnter={() => setHovered(true)}  // เมื่อเมาส์อยู่บนการ์ด
      onMouseLeave={() => setHovered(false)} // เมื่อเมาส์ออกจากการ์ด
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease-in-out', // เพิ่ม transition ให้การซูมดูนุ่มนวล
            transform: hovered ? 'scale(1.1)' : 'scale(1)', // ซูมเมื่อ hover
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
