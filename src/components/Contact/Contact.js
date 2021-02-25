import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

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
  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        ---Contact---
      </Typography>
      <Typography variant="h1" component="h2" gutterBottom>
        Stabileste o programare
      </Typography>
      <Typography variant="h6" gutterBottom>
        Rodica Musteata
      </Typography>
      <Typography variant="h6" gutterBottom>
        rodica.musteata@yahoo.com
      </Typography>
      <Typography variant="h6" gutterBottom>
        077778888999
      </Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="Nume"
            type="nume"
          />

          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="Prenume"
            type="prenume"
          />
        </div>
        <div>
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="E-mail"
            type="e-mail"
          />
          <TextField
            id="outlined-secondary"
            variant="outlined"
            color="secondary"
            label="Telefon"
            type="telefon"
          />
        </div>{" "}
        <div>
          <TextField
            id="outlined-secondary"
            select
            variant="outlined"
            label="Subiect"
            value={options}
            onChange={handleChange}
          >
            {newOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextareaAutosize
            className="mesaj"
            rowsMin={4}
            placeholder="Mesajul tau"
            varian="standard"
            // value={content}
            // onChange={(e) =>
            //   updateCardText({ source, id, content: e.target.value })
            // }
          />
        </div>
      </form>
    </div>
  );
}
