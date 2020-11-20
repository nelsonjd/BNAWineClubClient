import React from "react";
import ReactDOM from "react-dom";
import RegularTicketPage from "../components/RegularTicketPage";

export const RegularTicketPageView = Backbone.View.extend({
  className: "view-container",

  initialize(options) {
    this.router = options.router;
  },

  render() {
    ReactDOM.render(
      <RegularTicketPage />,
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
});
