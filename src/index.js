import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css"

import { Workspace } from "./routers/router";
import Backbone from "backbone";

$(function () {
  const rootElement = window.document.getElementById("root");
  new Workspace({rootElement: rootElement});
  Backbone.history.start({pushState: true});
});







