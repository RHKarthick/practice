import React, { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Cards from "./Cards";
function Products() {
  const [productsData, setProductsData] = useState([]);
  console.log(productsData, "productsData");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProductsData(data));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProductsData(data.data));
  // }, []);
  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: '#fff',
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //     ...theme.applyStyles('dark', {
  //       backgroundColor: '#1A2027',
  //     }),
  //   }));
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        {productsData && (
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {productsData.map((data) => (
              <Grid size={4}>
                <Cards
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default Products;
