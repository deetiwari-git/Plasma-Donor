/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import ContactForm from "./components/ContactForm"   
import Contacts from "./components/Contacts";
import ContactUs from "./components/ContactUs";
import BodyDomain from "./Home/BodyDomain";
import Home from "./Home/Home";
import source from "./images/Logo.jfif";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container ui top attached menu">
          <img className="ui tiny circular image" src={source} alt="Logo" />
          <a className="active item">HOME</a>
          <a className="item">PATIENT</a>
          <a className="item">DONOR</a>
          <a
            className="item"
            href="https://plasmadonor.in/contact-us"
            target="blank"
          >
            Contact Us
          </a>
          <div className="right item">
            <b>Login</b>
          </div>
        </div>
        <span>
          <p
            style={{ margin: "auto", padding: "10px" }}
            className="ui header medium container center aligned"
          >
            PLASMA DONOR
            <img
              className="spaced ui mini circular image"
              src={source}
              alt="Logo"
            />
          </p>
        </span>
        <BodyDomain />
        <Home />
        <Contacts />
        {/* <ContactForm /> */}
        <ContactUs />
      </div>
    );
  }
}

export default App;
