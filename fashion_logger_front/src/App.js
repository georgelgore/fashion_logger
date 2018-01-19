import React, { Component } from "react";
import "./App.css";
import FashionLogger from "./Components/FashionLogger";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/topics"
              render={args => {
                return <FashionLogger args={args} />;
              }}
            />
            <Route
              path="/edit"
              render={() => {
                return <Edit />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
