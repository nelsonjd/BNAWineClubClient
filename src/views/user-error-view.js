import React from "react";
import ReactDOM from "react-dom";
import UserErrorVideo from "../components/UserErrorVideo";
import $ from "jquery";

export const UserErrorView = Backbone.View.extend({
  initialize(options) {
    this.router = options.router;
  },

  render() {
    const body = $("body");
    body.removeClass();
    body.addClass("video-body");

    ReactDOM.render(<UserErrorVideo />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },
});
