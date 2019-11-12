import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "./pages/Index";
import Application from "./components/Application";

function App() {
  return (
    <div className="App">
      <Router>
        <Application>
          <Switch>
            <Route exact path="/" component={pages.Home} />
          </Switch>
        </Application>
      </Router>
    </div>
  );
}

export default App;
