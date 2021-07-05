/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import ContactForm from "./components/ContactForm"   
import Donor from "./components/Donor";
import Patient from "./components/Patient";
import ContactUs from "./components/ContactUs";
import BodyDomain from "./Home/BodyDomain";
import Home from "./Home/Home";
import Header from "./Home/Header"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={BodyDomain} exact />
            <Route path="/patient" component={Patient} />
            <Route path="/donor" component={Donor} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
          {/* <BodyDomain />
          <Home />
          <Contacts />
          <ContactForm />
          <ContactUs /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
