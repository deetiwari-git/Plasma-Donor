import React, { Component } from "react";
// import bg from '../images/Background.jfif';
import Home from "./Home";
import {Link} from 'react-router-dom';
class BodyDomain extends Component {
  onLoginClick() {}
  render() {
    return (
      <>
      <div className="ui container fluid">
        <div
          style={{
            backgroundColor: "red",
            opacity: "0.8",
            padding: "10px 10px 10px 10px",
            width: "100%",
          }}
        >
          <div
            className="ui container segment"
            style={{ padding: "10px 10px 10px 10px", opacity: "1" }}
          >
            <div className="ui header large">What We Do...</div>
            <p>
              We collect the database of potential donors, and potential
              recipients, and share it with the potential donors and needy
              recipients who have registered themselves with our website as and
              when requisition is received.
            </p>
          </div>
          <div
            style={{ margin: "auto", width: "40%" }}
            className="ui two column very relaxed grid"
          >
            <div className="column">
              <Link to='/donor'>
              <div
                className="ui button green"
                style={{
                  border: "1px solid black",
                  boxShadow: "4px 4px 2px black",
                  color: "black",
                  fontStyle: "bold",
                }}
              > 
                <strong>Be A Donor</strong>
              </div>
              </Link>
            </div>
            <div className="column">
              <Link to='patient'>
              <div
                className="ui button green"
                style={{
                  border: "1px solid black",
                  boxShadow: "4px 4px 2px black",
                  color: "black",
                  fontStyle: "bold",
                }}
              >
                <strong>Donors Near me</strong>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Home />
      </>
    );
  }
}

export default BodyDomain;
