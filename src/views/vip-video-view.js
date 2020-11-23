import React from "react";
import ReactDOM from "react-dom";
import VipVideo from "../components/VipVideo";
import $ from "jquery";

export const VipVideoView = Backbone.View.extend({
  initialize(options) {
    this.router = options.router;
  },

  render() {
    const body = $("body");
    body.removeClass();
    body.addClass("video-body");

    ReactDOM.render(<VipVideo />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },
});
