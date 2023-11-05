import { Box, Grid } from "@mui/material";
import { useState } from "react";

const Contador = ({stock, click}) => {
    const [count, setCount] = useState(0);

    const sumar = () => {
        count < stock ? setCount(count+1) : setCount(stock)
    }

    const resta = () => {
        count > 0 ? setCount(count-1) : setCount(0)
    }

  return (
    <Box sx={{width: 90, mx: 'auto'}}>
      <Grid sx={{mb: 1}} container justifyContent={'space-evenly'}>
        <Grid Item>
        <button onClick={resta}>-</button>
        </Grid>
        <Grid Item>
          {count}
        </Grid>
        <Grid Item>
          <button onClick={sumar}>+</button>
        </Grid>
      </Grid>
      <button onClick={click}>Agregar al carrito</button>
    </Box>
  );
};

export default Contador;
