import { AppConstants } from "../AppConstants";
import Backbone from "backbone";

export const WelcomePage = Backbone.Model.extend({
  urlRoot: AppConstants.baseUrl + '/api/welcomepage',
});