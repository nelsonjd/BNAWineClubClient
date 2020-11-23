import React, { Component } from "react";
import "../WelcomePage.css";

class WelcomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcome-page">
        <h1>Welcome to Wine Club Formal</h1>
        <p>Messrs.:<br />
        Andrew Castillo<br />
        Wilson Laine<br />
        Jordan Nelson<br />
        William Overton<br />
        Aaron Villareal<br />
        & George Wilson,</p>
        <p>cordially invite you to a formal evening of food and wine on Thursday, December 3, 2020. Please select your ticket type below to view more details:</p>
        <button onClick={this.props.handleRegClick}>Reguar Ticket</button>
        <button className="vip-tix-button" onClick={this.props.handleVipClick}>VIP Ticket</button>
      </div>
    );
  }
}

export default WelcomePage;
