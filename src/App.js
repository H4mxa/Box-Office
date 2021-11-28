import React from "react";
import { Switch, Route } from "react-router-dom";

// --------- Components ------------

// ---------- Pages ------------
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/starred" component={Starred} />

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>
        <div>Not found 404</div>
      </Route>
    </Switch>
  );
}

export default App;
