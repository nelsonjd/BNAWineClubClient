import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import { Workspace } from "./routers/router";
new Workspace();

import Backbone from "backbone";
import $ from "jquery";

Backbone.history.start();

$(function() {
  ReactDOM.render(<App />, window.document.getElementById("root"));
});