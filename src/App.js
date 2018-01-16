import React, { Component } from "react";
import Header from "./common/Header";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
       <Switch>
         <Route exact path="/" component={Main}/>
         
       </Switch>
      </div>
    );
  }
}

export default App;
