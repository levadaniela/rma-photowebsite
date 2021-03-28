import React, { useState } from "react";
import emailjs from "emailjs-com";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./Contact.css";
const newOptions = [
  { value: "Nou nascut" },
  { value: "Maternitate" },
  { value: "Bebelusi" },
  { value: "Foto de familie" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [options, setOptions] = useState("");
  const [content, setContent] = useState("");
  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2cti1p3",
        "template_abd6q7r",
        e.target,
        "user_x7EHqUJgmClYk0ERi2aZY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("hey");
  }
  return (
    <div className={classes.root}>
      <div className="titlePageC">
        <h1>_ CONTACT _</h1>
        <h2>Stabileste o programare</h2>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Rodica Musteata
        </Typography>
        <Typography variant="h6" gutterBottom>
          musteata_rodica@yahoo.com
        </Typography>
        <Typography variant="h6" gutterBottom>
          07424714686
        </Typography>
      </div>
      <div>
        <form className={classes.root} onSubmit={sendEmail}>
          <div>
            <TextField
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              label="Nume"
              type="text"
              name="nume"
            />

            <TextField
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              label="Prenume"
              type="text"
              name="prenume"
            />
          </div>
          <div>
            <TextField
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              label="E-mail"
              type="text"
              name="e-mail"
            />
            <TextField
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              label="Telefon"
              type="number"
              name="telefon"
            />
          </div>{" "}
          <div>
            <TextField
              id="outlined-secondary"
              variant="outlined"
              label="Subiect"
              name="subiect"
            />
          </div>
          <div>
            <TextareaAutosize
              className="mesaj"
              rowsMin={4}
              placeholder="Mesajul tau"
              varian="standard"
              name="mesaj"
            />
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
