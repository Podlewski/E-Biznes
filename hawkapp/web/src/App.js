import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Home, Login, Register, SearchObjects, AccountData,
         SportObject, Navigation, CreateSportObject } from "./components";
import "./components/Login.css"

function App() {
  const NoMatch = () => (
    <>
      <Navigation/>
      <div className="wrapper">
        <h3>404 - page not found :C</h3>
      </div>
    </>
  )

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/login" exact component={() => <Login/>} />
          <Route path="/register" exact component={() => <Register/>} />
          <Route path="/searchObjects" exact component={() => <SearchObjects/>} />
          <Route path="/accountData" exact component={() => <AccountData/>} />
          <Route path="/sportObject/:id" exact component={props => <SportObject {...props} />} />
          <Route path="/newObject" exact component={() => <CreateSportObject/>} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
