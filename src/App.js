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
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="Logo" />
          <Link to="/contact" className="item">
            Contact
          </Link>
          <Link to="/portofolio" className="item">
            Portofolio
          </Link>{" "}
          <Link to="/about" className="item">
            About
          </Link>
          <Link to="/" className="item">
            Home
          </Link>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/portofolio" component={Portofolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
