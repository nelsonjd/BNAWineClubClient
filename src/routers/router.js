import { WelcomePage } from "../models/welcome-page";
import { WelcomePageView } from "../views/welcome-page-view";

export const Workspace = Backbone.Router.extend({
  routes: {
    "*path": "defaultRoute"
  },

  defaultRoute: function() {
    const welcomePage = new WelcomePage();
    welcomePage.fetch();

    const viewContainerEl = window.document.getElementsByClassName(
      "view-container"
    );

    const view = new WelcomePageView({el: viewContainerEl});
    view.render();
  }
});