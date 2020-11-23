import { AppConstants } from "../AppConstants";
import Backbone from "backbone";

export const User = Backbone.Model.extend({
  urlRoot: AppConstants.baseUrl + "/api/users",
});
