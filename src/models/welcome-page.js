import App from "../App";
import { AppConstants } from "../AppConstants";

export const WelcomePage = Backbone.Model.extend({
  urlRoot: AppConstants.baseUrl + '/api/welcomepage'
});