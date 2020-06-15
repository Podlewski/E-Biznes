import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, Login, Register, SearchObjects, AccountData, SportObject } from "./components";
import "./components/Login.css"

function App() {
  const NoMatch = () => (
    <div className="wrapper">
      <h3>404 - page not found :C</h3>
    </div>
  )

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/searchObjects" exact component={() => <SearchObjects />} />
          <Route path="/accountData" exact component={() => <AccountData />} />
          <Route path="/sportObject" exact component={() => <SportObject />} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
