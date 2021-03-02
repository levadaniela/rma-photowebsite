import React from "react";
import CardPhoto from "../Card";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AboutMePhoto from "../../images/10.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        - About Page -
      </Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        Sunt Rodica Musteata
      </Typography>
      <Typography variant="h6" gutterBottom>
        mama, fotograf de familie si nou nascuti, iar acum imi redescopar
        pasiunea.
      </Typography>
      <CardPhoto image={AboutMePhoto} title="ABOUTME" TitlePhoto="ABOUT ME" />
      <Typography variant="h3" gutterBottom>
        - Programare -
      </Typography>
      <Typography variant="h2" component="h2" gutterBottom>
        Te astept
      </Typography>
      <Typography variant="h6" gutterBottom>
        in studioul meu pentru fotografie de maternitate, nou nascut, bebelusi
        si familie.
      </Typography>
      <Button variant="contained" color="primary">
        Stabileste o programare
      </Button>
    </div>
  );
}
