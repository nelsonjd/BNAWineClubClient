import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Workspace } from "./routers/router";
import Backbone from "backbone";

$(function () {
  ReactDOM.render(<App />, window.document.getElementById("root"));
  new Workspace();
  Backbone.history.start();
});







