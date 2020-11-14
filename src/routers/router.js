import Backbone from "backbone";

export const Workspace = Backbone.Router.extend({
  routes: {
    "*path": "defaultRoute"
  },

  defaultRoute: function() {
    console.log("hello! he's here");
  }
});