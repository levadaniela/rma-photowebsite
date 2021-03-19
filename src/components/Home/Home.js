import React from "react";
import Typography from "@material-ui/core/Typography";
import Animation from "../Animation/Animation";
import CardPhoto from "../Card/Card";
import NewBorn from "../../images/9.jpg";
import Baby from "../../images/5.jpg";
import Familly from "../../images/4.jpg";
import Maternity from "../../images/11.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="titlePageH">
        <Typography variant="h4" gutterBottom>
          ___ BINE AI VENIT ___
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Sunt Rodica Musteata
        </Typography>
      </div>
      <Animation />
      <div className="aboutTxt">
        <Typography className="txt" variant="h6" gutterBottom>
          mama, fotograf de familie si nou nascuti aflat la inceput de drum. Ma
          bucur ca ai ajuns pe pagina mea, locul in care iubirea pentru copii
          este surprinsa in cele mai frumoase imagini.
        </Typography>
      </div>
      <div className="titlePageHP">
        <Typography variant="h4" gutterBottom>
          ___ PORTOFOLIU ___
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Categorii de fotografii
        </Typography>
      </div>
      <section className="myPhoto">
        <div className="row">
          <div className="column">
            <CardPhoto
              image={NewBorn}
              title="NewBorn"
              TitlePhoto="Nou nascut"
            />
          </div>
          <div className="column">
            <CardPhoto image={Baby} title="Baby" TitlePhoto="Bebelusi" />
          </div>
          <div className="column">
            <CardPhoto
              image={Familly}
              title="Familly"
              TitlePhoto="Foto de Familie"
            />
          </div>
          <div className="column">
            <CardPhoto
              image={Maternity}
              title="Maternity"
              TitlePhoto="Maternitate"
            />
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
