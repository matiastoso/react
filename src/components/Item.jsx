import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({
  imageUrl,
  description,
  stock,
  price,
  title,
  id,
  buttonText,
}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={imageUrl}
          alt="Cargando..."
        />
        <CardContent>
          <Typography gutterBottom component="div">
            ${price}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}

            <br />
            <span> Stock: {stock} </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${id}`}>
          <Button size="small" color="secondary">
            {buttonText}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
