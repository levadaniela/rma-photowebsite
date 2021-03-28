import React from "react";
import CardPhoto from "../Card/Card";
import Typography from "@material-ui/core/Typography";
import "./About.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AboutMePhoto from "../../images/1.jpg";
import Contact from "../Contact/Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <div className="titlePageA">
        <h1>_ DESPRE MINE _</h1>
        <h2>Sunt Rodica Musteata</h2>
      </div>

      <div className="aboutTxt">
        <h3>
          Nativii americani credeau că aparatul de fotografiat obișnuia să le
          fure sufletele. De fapt, fiecare fotografie surprinde părți ale
          sufletului ... strălucirea din ochii cuiva, o șoaptă iubitoare,
          zâmbetul copilului tău, primii săi pași ... fragmente din viața ta.
        </h3>
        {"\n"}
        <h3>
          Cu toate acestea, nu mă voi numi un hoț de suflete, ci mai degrabă un
          creator de amintiri.{" "}
        </h3>
        {"\n"}
        <h3>
          Scopul meu este să opresc timpul și să surprind bucuria sufletului tău
          într-o fotografie, astfel încât să o poți experimenta de câte ori
          dorești de-a lungul anilor.
        </h3>
      </div>
      <div className="mePhoto">
        <img id="abtMePhoto" src={AboutMePhoto} />
      </div>
      <section className="programareAbt">
        <div className="titlePageA">
          <h1>_ PROGRAMARE _</h1> <h3>Te astept</h3>
        </div>{" "}
        <h5 className="aboutTxt">
          in studioul meu pentru fotografie de maternitate, nou nascut, bebelusi
          si familie.
        </h5>
        <Button
          variant="contained"
          color="primary"
          href="/contact"
          size="large"
          className={classes.margin}
        >
          Stabileste o programare
        </Button>
      </section>
    </div>
  );
}
