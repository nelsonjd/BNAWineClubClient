import { AppConstants } from "../AppConstants";
import Backbone from "backbone";

export const RegularTicketPage = Backbone.Model.extend({
  urlRoot: AppConstants.baseUrl + "/api/regularticket",
});
