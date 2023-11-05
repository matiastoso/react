import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SuplementosPage from "./pages/SuplementosPage";
import RopaPage from "./pages/RopaPage";
import AccesoriosPage from "./pages/AccesoriosPage";
import { Typography } from "@mui/material";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import React from "react";
import CartProvider from "./context/CartContext";

export const CartContext = React.createContext("");

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/suplementos" element={<SuplementosPage />} />
        <Route exact path="/ropa-deportiva" element={<RopaPage />} />
        <Route exact path="/accesorios" element={<AccesoriosPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route
          exact
          path="*"
          element={
            <Typography
              variant="h1"
              color={"red"}
              sx={{ mt: "180px", textAlign: "center" }}
            >
              Ruta erronea.
            </Typography>
          }
        />
      </Routes>
    </CartProvider>
  );
};

export default App;
