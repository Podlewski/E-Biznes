import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, Login, Register, SearchObjects } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/searchObjects" exact component={() => <SearchObjects />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
