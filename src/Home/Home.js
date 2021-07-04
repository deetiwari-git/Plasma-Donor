import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import table from "../images/plasmadonor.png";
class Home extends Component {
  render() {
    return (
      <div className="container ui fluid">
        <div className="divider ui"></div>
        <div className="ui container segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <div className="ui container segment">
                <div className="ui header large">What Is PLASMA?</div>
                <p>
                  Plasma is in everyone. Plasma is the colourless liquid part of
                  blood in which the blood cells viz. RBCs, WBCs, Platelets and
                  other cellular components etc float. It is single largest
                  component of the blood. It comprises 55% of the blood in body.
                  And it contains water , salts, enzymes, antibody and other
                  proteins. Different constituents of Plasma perform different
                  important functions in the body. Antigens are molecules
                  capable of stimulating an immune response. Antibodiesare
                  proteins produced by immune system. Antibodies help to fight
                  the disease.
                </p>
              </div>
              <div className="divider ui"></div>
              <div className="ui container segment">
                <div className="ui header large">
                  Is It Safe to Donate PLASMA?
                </div>
                <p>
                  Blood and plasma have been used to treat many other
                  conditions, and they're usually very safe. The risk of
                  contracting COVID-19 infection from receiving convalescent
                  plasma therapy is very low because the plasma donor has fully
                  recovered from the infection.
                </p>
              </div>
            </div>
            <div className="column">
              {/* <div className = 'divider ui'></div> */}
              <div className="ui container segment">
                <div className="ui header large">What Is Antibody Test?</div>
                <p>
                  An antibody test is a screening for antibodies in blood. It is
                  also called a serology test.The antibody test isn’t checking
                  for the virus itself. Instead, it looks to see whether your
                  immune system -- your body’s defense against illness -- has
                  responded to the infection.
                </p>
              </div>
              <div className="divider ui"></div>
              <div className="ui container segment">
                <div className="ui header large">
                  How many days a recovered body can take to develop Antibody?
                </div>
                <p>
                  Antibodies develops in 14 to 28 days, and it will last till
                  2-3 months.
                </p>
              </div>
            </div>
          </div>
          <div className="divider ui"></div>
          <div className="ui segment">
            <div className="container header ui large center aligned">
              Who Can Donate?
            </div>
            <img src={table} alt="table" className="ui image large centered" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
