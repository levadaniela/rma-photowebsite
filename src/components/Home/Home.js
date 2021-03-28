import React from "react";
import Animation from "../Animation/Animation";
import CardPhoto from "../Card/Card";
import NewBorn from "../../images/9.jpg";
import Baby from "../../images/5.jpg";
import Familly from "../../images/4.jpg";
import Maternity from "../../images/11.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="titlePageH">
        <h1>_ BINE AI VENIT _</h1>
        <h2>Sunt Rodica Musteata</h2>
      </div>
      <Animation />
      <div className="aboutTxt">
        <h3 className="txt">
          mama, fotograf de familie si nou nascuti aflat la inceput de drum. Ma
          bucur ca ai ajuns pe pagina mea, locul in care iubirea pentru copii
          este surprinsa in cele mai frumoase imagini.
        </h3>
      </div>
      <div className="titlePageHP">
        <h1>_ PORTOFOLIU _</h1>
        <h2>Categorii de fotografii</h2>
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
