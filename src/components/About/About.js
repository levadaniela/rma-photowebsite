import React from "react";
import CardPhoto from "../Card/Card";
import Typography from "@material-ui/core/Typography";
import "./About.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AboutMePhoto from "../../images/1.jpg";
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
      <div className="titlePageA">
        <Typography variant="h4" gutterBottom>
          __ DESPRE MINE __
        </Typography>
      </div>

      <Typography variant="h2" component="h2" gutterBottom>
        Sunt Rodica Musteata
      </Typography>
      <div className="aboutTxt">
        <Typography className="txt" variant="h6" gutterBottom>
          Nativii americani credeau că aparatul de fotografiat obișnuia să le
          fure sufletele. De fapt, fiecare fotografie surprinde părți ale
          sufletului ... strălucirea din ochii cuiva, o șoaptă iubitoare,
          zâmbetul copilului tău, primii săi pași ... fragmente din viața ta.
          {"\n"}
          <Typography variant="h6" gutterBottom>
            Cu toate acestea, nu mă voi numi un hoț de suflete, ci mai degrabă
            un creator de amintiri. {"\n"}
            <Typography variant="h6" gutterBottom>
              Scopul meu este să opresc timpul și să surprind bucuria sufletului
              tău într-o fotografie, astfel încât să o poți experimenta de câte
              ori dorești de-a lungul anilor.
            </Typography>
          </Typography>
        </Typography>
      </div>

      <CardPhoto image={AboutMePhoto} title="ABOUTME" />

      <div className="programareAbt">
        {" "}
        <Typography className="titlePageA" variant="h3" gutterBottom>
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
    </div>
  );
}
