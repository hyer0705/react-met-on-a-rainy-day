import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home.js";
import Detail from "./router/Detail.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
