import { WelcomePage } from "../models/welcome-page";
import { WelcomePageView } from "../views/welcome-page-view";
import { RegularTicketPageView } from "../views/regular-ticket-page-view";
import { RegularTicketPage } from "../models/regular-ticket-page";
import { NewUserView } from "../views/new-user-view";
import { VipVideoView } from "../views/vip-video-view";

export const Workspace = Backbone.Router.extend({
  initialize(options) {
    this.rootElement = options.rootElement;
    this.currentView;
  },

  routes: {
    regularticket: "regularticket",
    "users/new": "newUsers",
    vipvideo: "vipvideo",
    "*path": "defaultRoute",
  },

  defaultRoute: function () {
    const welcomePage = new WelcomePage();
    welcomePage.fetch();

    this.currentView = new WelcomePageView({
      el: this.rootElement,
      router: this,
    });
    this.currentView.render();
  },

  regularticket: function () {
    const model = new RegularTicketPage();
    model.fetch();

    this.currentView = new RegularTicketPageView({
      el: this.rootElement,
      router: this,
    });
    this.currentView.render();
  },

  newUsers: function () {

    this.currentView = new NewUserView({
      el: this.rootElement,
      router: this,
    });
    this.currentView.render();
  },


  vipvideo: function() {
    this.currentView = new VipVideoView({
      el: this.rootElement,
      router: this
    });

    this.currentView.render();
  }
});