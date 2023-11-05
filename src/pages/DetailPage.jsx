import { Container, Grid, Typography } from "@mui/material";
import { initializeApp } from "firebase/app";
import Item from "../components/Item";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState, useContext } from "react";
import { useCartContext } from "../context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyAxcO_JG0oakoYYuu-MSn5igX6qHqA_zPA",
  authDomain: "react-ecommerce-3d759.firebaseapp.com",
  projectId: "react-ecommerce-3d759",
  storageBucket: "react-ecommerce-3d759.appspot.com",
  messagingSenderId: "523075118660",
  appId: "1:523075118660:web:2ed42be784cdd56dddfe11",
};
import { Link, useParams } from "react-router-dom";
import Contador from "../components/Contador";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DetailPage = () => {
  const [goToCart, setGoToCart] = useState(false);
  
  const handleClick = () => {
    setGoToCart(true);
  };

  let id = useParams();
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
        return prod.id == id.id;
      });
      setProducts(dataFilted);
    });
  }, []);

  return (
    <>
      <Typography sx={{ mt: 12 }} textAlign={"center"} variant="h3">
        Detalle del producto:
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
                  buttonText={null}
                />

                {goToCart ? (
                  <Link to={"/cart"}>Terminar compra</Link>
                ) : (
                  <Contador click={handleClick} stock={prod.stock} />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default DetailPage;
