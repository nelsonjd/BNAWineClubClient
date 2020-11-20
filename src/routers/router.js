import { WelcomePage } from "../models/welcome-page";
import { WelcomePageView } from "../views/welcome-page-view";
import { RegularTicketPageView } from "../views/regular-ticket-page-view";
import { RegularTicketPage } from "../models/regular-ticket-page";

export const Workspace = Backbone.Router.extend({
  initialize(options)
  {
    this.rootElement = options.rootElement;
    this.currentView;
  },

  routes: {
    "regularticket": "regularticket",
    "*path": "defaultRoute",
  },

  defaultRoute: function() {
    const welcomePage = new WelcomePage();
    welcomePage.fetch();

    this.currentView = new WelcomePageView({el: this.rootElement, router: this});
    this.currentView.render();
  },

  regularticket: function() {

    const model = new RegularTicketPage();
    model.fetch();

    this.currentView = new RegularTicketPageView({el: this.rootElement, router: this});
    this.currentView.render();
  },
});