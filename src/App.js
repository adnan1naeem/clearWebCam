import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Success, NotFound, Ready, Home } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/notfound">
          <NotFound />
        </Route>
        <Route exact path="/ready">
          <Ready />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
