import React from "react";
import ReactDOM from "react-dom";
import VipForm from "../components/VipForm";
import $ from "jquery";

export const VipTicketPageView = Backbone.View.extend({
  initialize(options) {
    this.router = options.router;
  },

  render() {
    const body = $("body");
    body.removeClass();
    body.addClass("normal-body");

    ReactDOM.render(<VipForm />, this.el);
    return this;
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },

  handleRegClick() {
    this.router.navigate("regularticket", { trigger: true });
  },
});
