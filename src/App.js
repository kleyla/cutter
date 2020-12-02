import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import Routes from "./Routes";
import theme from "./themeConfig";
import Navbar from "./components/shared/Navbar";

const useStyles = makeStyles({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <HashRouter basename="/">
        <Navbar />
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Container maxWidth="lg">
              <Switch>
                <Routes />
              </Switch>
            </Container>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
