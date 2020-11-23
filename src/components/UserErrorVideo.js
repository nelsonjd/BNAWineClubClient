import React, { Component } from "react";
import "../UserErrorVideo.css";

class UserErrorVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: true };
    this.handleLoadedMetadata = this.handleLoadedMetadata.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLoadedMetadata(event) {
    event.target.currentTime = 243;
  }

  handleClick(event) {
    this.setState({ isMuted: false });
  }

  render() {
    const { isMuted } = this.state;

    return (
      <div className="user-error-video-container">
        <video
          className="user-error-video"
          autoPlay
          playsInline
          muted={isMuted}
          onLoadedMetadata={this.handleLoadedMetadata}
        >
          <source
            src="https://bna-wine-club-media-bucket.s3.us-east-2.amazonaws.com/princess_bride.mp4"
            type="video/mp4"
          />
        </video>
        <button
          onClick={this.handleClick}
          className={`unmute-button ${isMuted ? "" : "not-visible"}`}
        >
          Click to unmute
        </button>
      </div>
    );
  }
}

export default UserErrorVideo;
