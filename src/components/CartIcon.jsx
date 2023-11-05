import { Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
    return (
    <>
      <Grid item>
        <ShoppingCartIcon />
        <span> 1 </span>
      </Grid>
    </>
  );
};

export default CartIcon;
