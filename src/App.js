import React from "react";
import { Switch, Route } from "react-router-dom";

// --------- Components ------------
import Navs from "./components/Navs";

// ---------- Pages ------------
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/starred" component={Starred} />

        <Route>
          <div>Not found 404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
