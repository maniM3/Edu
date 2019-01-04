import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import uppernav from "../src/components/UpperNav/component";
import student from "../src/components/Register/Student/component";
import verifier from "../src/components/Register/Verifier/component";
import issuer from "../src/components/Register/Issuer/component";
import "./App.css";

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};

class App extends Component {
  render() {
    // return <div className="App" />;
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={uppernav} />
          <Route path="/student" component={student} />
          <Route path="/verifier" component={verifier} />
          <Route path="/issuer" component={issuer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
