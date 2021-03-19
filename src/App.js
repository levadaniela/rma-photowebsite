import React from "react";
import logo from "./images/logo.jpg";
import About from "./components/About/About";
import Portofolio from "./components/Portofolio/Portofolio";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <header className="header">
          <img src={logo} className="logo" alt="Logo" />
          <Link to="/contact" className="item">
            CONTACT
          </Link>
          <Link to="/portofolio" className="item">
            PORTOFOLIO
          </Link>{" "}
          <Link to="/about" className="item">
            DESPRE MINE
          </Link>
          <Link to="/" className="item">
            HOME
          </Link>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/portofolio" component={Portofolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
