import React from "react";
import ReactDOM from "react-dom";
import VipForm from "../components/VipForm";
import $ from "jquery";
import { User } from "../models/user";

export const NewUserView = Backbone.View.extend({
  initialize(options) {
    this.router = options.router;

    this.handleFormSubmitted = this.handleFormSubmitted.bind(this);
  },

  render() {
    const body = $("body");
    body.removeClass();
    body.addClass("normal-body");

    ReactDOM.render(<VipForm onFormSubmitted={this.handleFormSubmitted} />, this.el);
    return this;
  },

  handleFormSubmitted(entry)
  {
    const user = new User();
    
    user.save({name: 'William', password: entry}, {
      error: (error, request) =>
      {
        this.router.navigate("usererror", {
          trigger: true,
        });
      },
      success: (model, response) => {
        this.router.navigate("vipvideo", {
          trigger: true,
        });
      },
      context: this
    });
  },

  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  },
});
