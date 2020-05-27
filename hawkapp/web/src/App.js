import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Navigation, Footer, Home, Login, Register, ForgotPassword } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/forgotPassword" exact component={() => <ForgotPassword />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
