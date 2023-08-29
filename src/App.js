import * as React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home.js";
import Detail from "./router/Detail.js";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
