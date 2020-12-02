import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const Form = () => {
  const classes = useStyles();

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
        incidunt. Commodi eveniet, harum consequatur accusantium tempore ea.
        Voluptatem quam quasi ratione sapiente, eligendi minima! Sunt nesciunt
        obcaecati et eligendi rem!
      </p>
    </>
  );
};

export default Form;
