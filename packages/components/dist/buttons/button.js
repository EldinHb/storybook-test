"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _labels = require("../labels");

var __jsx = _react["default"].createElement;

var Button = function Button(props) {
  console.log(props.primary);
  return __jsx(ButtonContainer, {
    primary: props.primary,
    onClick: props.onClick
  }, __jsx(Text, null, props.text ? props.text : props.children));
};

exports.Button = Button;

var ButtonContainer = _styledComponents["default"].div.withConfig({
  displayName: "button__ButtonContainer",
  componentId: "sc-1ny31on-0"
})(["height:50px;align-self:flex-start;display:inline-flex;justify-content:space-around;align-items:center;border-radius:4px;background-color:", ";", ";color:", ";padding:0 10px;&:hover{cursor:pointer;}"], function (x) {
  return x.primary ? 'blue' : 'white';
}, function (x) {
  return !x.primary ? 'border: 1px solid gray' : '';
}, function (x) {
  return x.primary ? 'white' : 'black';
});

var Text = (0, _styledComponents["default"])(_labels.Label).withConfig({
  displayName: "button__Text",
  componentId: "sc-1ny31on-1"
})(["user-select:none;"]);