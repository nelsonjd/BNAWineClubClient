import WelcomePage from "../components/WelcomePage";
import React from "react";
import ReactDOM from "react-dom";

export const WelcomePageView = Backbone.View.extend({
  className: "view-container",

  initialize(options) {
    this.router = options.router;
    this.handleRegClick = this.handleRegClick.bind(this);
  },

  render() {
    ReactDOM.render(<WelcomePage handleRegClick={this.handleRegClick} />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },

  handleRegClick() {
    this.router.navigate('regularticket', {trigger: true})
  }
});