import React, { Component } from "react";
import "../VipVideo.css";

class VipVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: true, isInvitationVisible: false };
    this.handleClick = this.handleClick.bind(this);
    this.onEnded = this.onEnded.bind(this);
  }

  handleClick(event) {
    this.setState({ isMuted: false });
  }

  onEnded(event) {
    this.setState({isInvitationVisible: true});
  }

  render() {
    const { isMuted } = this.state;

    return (
      <div className="vip-video-container">
        <video
          className="vip-video"
          autoPlay
          playsInline
          onEnded={this.onEnded}
          muted={isMuted}
        >
          <source
            src="https://bna-wine-club-media-bucket.s3.us-east-2.amazonaws.com/casablanca.mp4"
            type="video/mp4"
          />
        </video>
        <button
          onClick={this.handleClick}
          className={`unmute-button ${isMuted ? "" : "not-visible"}`}
        >
          Unmute
        </button>
      </div>
    );
  }
}

export default VipVideo;
