import React, { Component } from "react";
import "../RegularTicketPage.css";


class RegularTicketPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: true };
    this.handleLoadedMetadata = this.handleLoadedMetadata.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLoadedMetadata(event) {
    // event.target.currentTime = 243; <- princess bride
    event.target.currentTime = 100;
  }

  handleClick(event) {
    this.setState({isMuted: false});
  }

  render() {
    const { isMuted } = this.state;

    return (
      <div className="regular-ticket-page">
        <video className="regular-video" autoPlay playsInline muted={isMuted} onLoadedMetadata={this.handleLoadedMetadata}>
          <source
            src="https://bna-wine-club-media-bucket.s3.us-east-2.amazonaws.com/muppets.mp4"
            type="video/mp4"
          />
        </video>
        <button onClick={this.handleClick} className={`unmute-button ${isMuted ? "" : "not-visible"}`}>Unmute</button>
      </div>
    );
  }
}

export default RegularTicketPage;
