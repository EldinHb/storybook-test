"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buttons = require("./buttons");

Object.keys(_buttons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _buttons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _buttons[key];
    }
  });
});

var _labels = require("./labels");

Object.keys(_labels).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _labels[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _labels[key];
    }
  });
});