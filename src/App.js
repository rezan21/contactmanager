import React, { Component } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="contact manager" />
        <div className="container">
          <Contact name="Reza" email="Reza@gmail.com" phone="222-222-222" />
        </div>
      </div>
    );
  }
}

export default App;
