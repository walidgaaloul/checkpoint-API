import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./component/UserList";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Navb from "./component/Navbar";
function App() {
  return (
    <div className="App">
    <Navb />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserList} />
    </Switch>
    
  </div>
);
}

export default App;
