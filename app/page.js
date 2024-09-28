'use client'
import * as React from "react";
import { Container, Grid, Typography } from '@mui/material';
import RecipeCard from "./component/card";
export default function Home() {
  const recipes = [
    {
      title: "ALL",
      image: "/images/1.jpg", 
      time: 20,
      servings: 4,
    },
    {
      title: "TOMYUMKUNG",
      image: "/images/2.jpg",
      time: 25,
      servings: 4,
    },
    {
      title: "KHAWCAPI",
      image: "/images/3.jpg",
      time: 15,
      servings: 3,
    },
    {
      title: "KHAWCAPAO1",
      image: "/images/4.jpg",
      time: 17,
      servings: 1,
    },
    {
      title: "KHAWCAPAO2",
      image: "/images/5.png",
      time: 15,
      servings: 5,
    },
    
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        RECOMMENDED
      </Typography>
      <Typography variant="h5" component="h1" >
        Recipes
      </Typography>
      <Grid container justifyContent="center">
        {recipes.map((recipe, index) => (
          <Grid item key={index}>
            <RecipeCard {...recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
