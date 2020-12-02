import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "./../components/shared/Navbar";
import LargeGuide from "./../components/LargeGuide";

const Guide = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Guia</Typography>
      </Grid>
      <Grid item xs={12}>
        <LargeGuide />
      </Grid>
    </Grid>
  );
};

export default Guide;
