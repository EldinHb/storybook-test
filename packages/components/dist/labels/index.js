"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _label = require("./label");

Object.keys(_label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _label[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _label[key];
    }
  });
});