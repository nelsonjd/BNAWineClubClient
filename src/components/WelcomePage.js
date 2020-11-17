import React, { Component } from "react";
import "../WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return <div className="welcome-page">
      <h1>Welcome to Wine Club Formal</h1>
      <p>The event will be held on Thursday, December 3, 2020.</p>
      <p>Please select your ticket type below</p>
      <button>Reguar Ticket</button>
      <button>VIP Ticket</button>
    </div>;
  }
}

export default WelcomePage;
