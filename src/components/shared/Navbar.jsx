import React from "react";
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "inherit",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  textWhite: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const links = [
    { url: "/about", text: "Sobre nosotros" },
    { url: "/guide", text: "Guias" },
  ];
  return (
    <AppBar position="static">
      <Toolbar>
        <ListItem button component={Link} to="/" className={classes.title}>
          <ListItemIcon>
            <Icon className={classes.textWhite}>menu_book</Icon>
          </ListItemIcon>
          {/* <ListItemText primary="CUTTER" variant="h6" /> */}
          <Typography variant="h6">CUTTER</Typography>
        </ListItem>
        {links.map((item, index) => {
          return (
            <Link to={item.url} className={classes.textWhite} key={index}>
              <Button color="inherit">{item.text}</Button>
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
