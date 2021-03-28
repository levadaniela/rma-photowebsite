import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Photo1 from "../../images/1.jpg";
import Photo2 from "../../images/2.jpg";
import Photo3 from "../../images/3.jpg";
import Photo4 from "../../images/4.jpg";
import Photo5 from "../../images/5.jpg";
import Photo6 from "../../images/6.jpg";
import Photo7 from "../../images/7.jpg";
import Photo8 from "../../images/8.jpg";
import Photo9 from "../../images/9.jpg";
import Photo10 from "../../images/10.jpg";
import Photo11 from "../../images/11.jpg";
import Photo12 from "../../images/12.jpg";
import Photo13 from "../../images/13.jpg";
import "./Portofolio.css";

export default function Portofolio() {
  return (
    <div className="Portofolio">
      <div className="titlePageP">
        <h1>_ PORTOFOLIU _</h1>
      </div>
      <section className="section">
        <h1>NOU NASCUT</h1>
        <div className="row">
          <div className="column">
            <img className="photos" src={Photo2} />
          </div>
          <div className="column">
            <img className="photos" src={Photo8} />
          </div>
          <div className="column">
            <img className="photos" src={Photo9} />
          </div>
          <div className="column">
            <img className="photos" src={Photo12} />
          </div>
        </div>
      </section>
      <section className="section">
        <h1> BEBELUSI</h1>
        <div className="row">
          <div className="column">
            <img className="photos" src={Photo3} />
          </div>
          <div className="column">
            <img className="photos" src={Photo5} />
          </div>
          <div className="column">
            <img className="photos" src={Photo10} />
          </div>
        </div>
      </section>
      <section className="section">
        <h1> FOTO DE FAMILIE</h1>{" "}
        <div className="row">
          <div className="column">
            <img className="photos" src={Photo4} />
          </div>
          <div className="column">
            <img className="photos" src={Photo7} />
          </div>
          <div className="column">
            <img className="photos" src={Photo13} />
          </div>
        </div>
      </section>
      <section className="section">
        <h1> MATERNITATE</h1>{" "}
        <div className="row">
          <div className="column">
            <img className="photos" src={Photo11} />
          </div>
        </div>
      </section>
    </div>
  );
}
