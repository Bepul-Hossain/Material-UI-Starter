import {  makeStyles } from "@material-ui/core";
import React from "react";
import "./styles/App.css";
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
  }
}))
function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root} disableGutters>
        <Navbar />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
