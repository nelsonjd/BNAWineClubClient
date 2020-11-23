import React, { Component } from "react";
import "../VipVideo.css";
import $ from "jquery";

class VipVideoSwap extends Component {
  constructor(props) {
    super(props);
    this.state = {isInvitationVisible: false};
    this.onEnded = this.onEnded.bind(this);
  }
    
  onEnded() {
    this.setState({isInvitationVisible: true});
  }

  render() {
    if (this.state.isInvitationVisible) {
      const body = $("body");
      body.removeClass();
      body.addClass("normal-body");
      return <VipInvitation />;
    }

    const body = $("body");
    body.removeClass();
    body.addClass("video-body");
    return <VipVideo onEnded={this.onEnded} />
  }
}


class VipVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {isMuted: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({isMuted: false});
  }

  render() {
    const { isMuted } = this.state;

    return (
      <div className="vip-video-container">
        <video
          className="vip-video"
          autoPlay
          playsInline
          onEnded={this.props.onEnded}
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
          Details to follow video<br />
          Click to unmute
        </button>
      </div>
    );
  }
}

function VipInvitation(props) {
  return (
  <div className="vip-invitation">
    <p>Time: 6:00 P.M.</p>
    <p>Date: Thursday, December 3, 2020</p>
    <p>Location: Please contact Mr. Villareal, his number is ...</p>
    <p>Attire: Cocktail attire</p>
  </div>
  );
}


export default VipVideoSwap;
