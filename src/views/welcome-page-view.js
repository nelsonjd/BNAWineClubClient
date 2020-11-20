import WelcomePage from "../components/WelcomePage";
import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

export const WelcomePageView = Backbone.View.extend({

  initialize(options) {
    this.router = options.router;
    this.handleRegClick = this.handleRegClick.bind(this);
    this.handleVipClick = this.handleVipClick.bind(this);
  },

  render() {
    const body = $("body");
    body.removeClass();
    body.addClass("normal-body");
    
    ReactDOM.render(
      <WelcomePage handleRegClick={this.handleRegClick} handleVipClick={this.handleVipClick} />,
      this.el
    );
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },

  handleRegClick() {
    this.router.navigate("regularticket", { trigger: true });
  },

  handleVipClick() {
    this.router.navigate("vipticket", { trigger: true });
  }
});