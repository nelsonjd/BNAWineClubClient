import WelcomePage from "./WelcomePage";
import React from "react";
import ReactDOM from "react-dom";

export const WelcomePageView = Backbone.View.extend({
  className: "view-container",

  render() {
    ReactDOM.render(<WelcomePage />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },
});