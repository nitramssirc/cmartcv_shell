import React from "react";
import { Switch, Route } from "react-router-dom";

import ShellNavbar from "./Components/ShellNavbar";
import RouterSection from "./Components/RouterSection";

function App() {
  return (
    <div>
      <ShellNavbar />
      <Switch>
        <Route path="/:id">
          <RouterSection />
        </Route>
        <Route path="*">
          <RouterSection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
