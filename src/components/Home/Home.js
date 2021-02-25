import React from "react";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        ---Home Page---
      </Typography>
    </div>
  );
}
