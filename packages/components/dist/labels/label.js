"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var __jsx = _react["default"].createElement;

var Label = function Label(props) {
  return __jsx(StyledLabel, {
    className: props.className
  }, props.children);
};

exports.Label = Label;

var StyledLabel = _styledComponents["default"].span.withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-1c1w69k-0"
})(["font-size:1rem;"]);