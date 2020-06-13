import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, Login, Register, SearchObjects, AccountData } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/searchObjects" exact component={() => <SearchObjects />} />
          <Route path="/accountData" exact component={() => <AccountData />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
