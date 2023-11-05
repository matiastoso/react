import { Container, Grid, Typography } from "@mui/material";
import Item from "./Item";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAxcO_JG0oakoYYuu-MSn5igX6qHqA_zPA",
  authDomain: "react-ecommerce-3d759.firebaseapp.com",
  projectId: "react-ecommerce-3d759",
  storageBucket: "react-ecommerce-3d759.appspot.com",
  messagingSenderId: "523075118660",
  appId: "1:523075118660:web:2ed42be784cdd56dddfe11",
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemListContainer = ({ titulo, categoria }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts(db) {
      const productsCol = collection(db, "items");
      const productsSnapshot = await getDocs(productsCol);
      const productList = productsSnapshot.docs.map((doc) => doc.data());
      return productList;
    }

    getProducts(db).then((data) => {
      const dataFilted = data.filter((prod) => {
        return prod.category.includes(categoria);
      });
      setProducts(dataFilted);
    });
  }, []);

  return (
    <>
      <Typography sx={{ mt: 12 }} textAlign={"center"} variant="h3">
        {titulo}
      </Typography>
      <Container>
        <Grid container justifyContent={"center"}>
          {products.map((prod) => {
            return (
              <Grid item key={prod.id}>
                <Item
                  key={prod.id}
                  imageUrl={prod.imageUrl}
                  description={prod.description}
                  title={prod.title}
                  price={prod.price}
                  stock={prod.stock}
                  id={prod.id}
                  buttonText={'Ver producto'}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
