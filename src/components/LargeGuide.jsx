import {
  Avatar,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import lista from "./../data/guide.json";

const useStyles = makeStyles((theme) => ({
  imagen: {
    width: "100%",
    height: "auto",
  },
  number: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
}));

const LargeGuide = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="h5">
          Como usar esta guia de Cutter-Sanborn Table?
        </Typography>
        {lista.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                {item.point ? (
                  <Avatar className={classes.number}>{item.number}.</Avatar>
                ) : (
                  <></>
                )}
              </ListItemAvatar>
              <ListItemText primary={item.content}></ListItemText>
            </ListItem>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default LargeGuide;
