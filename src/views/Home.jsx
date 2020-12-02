import React from "react";
import Navbar from "./../components/shared/Navbar";
import Form from "./../components/Form";
import { Grid, Typography } from "@material-ui/core";
import LitleGuide from "./../components/LitleGuide";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Home</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <LitleGuide />
        </Grid>
        <Grid item xs={12} md={6}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
