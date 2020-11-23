import React from "react";
import ReactDOM from "react-dom";
import VipVideoSwap from "../components/VipVideo";
import $ from "jquery";

export const VipVideoView = Backbone.View.extend({
  initialize(options) {
    this.router = options.router;
  },

  render() {
    ReactDOM.render(<VipVideoSwap />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },
});
