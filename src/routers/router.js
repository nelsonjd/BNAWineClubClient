import Backbone from "backbone";
import { WelcomePage } from "../models/welcome-page";

export const Workspace = Backbone.Router.extend({
  routes: {
    "*path": "defaultRoute"
  },

  defaultRoute: function() {
    const welcomePage = new WelcomePage();
    welcomePage.fetch();
  }
});