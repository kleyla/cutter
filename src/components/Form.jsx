import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, errors } = useForm();
  const onSubmitForm = (data, e) => {
    console.log(data);
  };
  return (
    <Card>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmitForm)}
        className={classes.form}
      >
        <CardContent>
          <Typography variant="h6">Apellido a buscar</Typography>
          <div>
            <TextField
              id="surname"
              name="surname"
              label="Apellido"
              variant="outlined"
              error={errors.surname ? true : false}
              helperText={errors.surname ? errors.surname.message : ""}
              inputRef={register({
                required: { value: true, message: "Campo requerido" },
              })}
              className="fullWidth"
            />
          </div>
        </CardContent>
        <CardActions>
          <Button type="submit" autoFocus color="primary">Buscar</Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Form;
