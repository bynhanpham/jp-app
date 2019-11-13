import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "./pages/Index";
import Application from "./components/Application";
import { UserContext } from "./components/Context";
import useUser from "./hooks/useUser";

function App() {
  const { user, userActions } = useUser();

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, userActions }}>
          <Switch>
            <Route path="/login" component={pages.Login} />
            <Application>
              <Route path="/home" component={pages.Home} />
            </Application>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
