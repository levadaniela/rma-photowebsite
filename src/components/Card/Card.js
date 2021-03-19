import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

const useStyles = makeStyles(() => ({
  root: {
    width: 450,
    height: 450,
  },
  media: {
    height: 380,
  },
}));

const CardPhoto = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.TitlePhoto}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardPhoto;
