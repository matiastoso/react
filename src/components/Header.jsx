import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cart from "./CartIcon";

const Header = () => {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Link to={"/"}>
                  <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
                  >
                    TodoSport
                  </Typography>
                </Link>
              </Grid>

              <Grid item>
                <ButtonGroup color="secondary" variant="contained">
                  <Link to={"/suplementos"}>
                    <Button>Suplementos</Button>
                  </Link>
                  <Link to={"/ropa-deportiva"}>
                    <Button>Ropa deportiva</Button>
                  </Link>
                  <Link to={"/accesorios"}>
                    <Button>Accesorios</Button>
                  </Link>
                </ButtonGroup>
              </Grid>

              <Cart />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
