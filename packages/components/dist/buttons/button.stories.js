"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("./button");

var __jsx = _react["default"].createElement;
var _default = {
  title: 'Button',
  component: _button.Button,
  argTypes: {
    text: {
      name: 'text',
      defaultValue: 'default value',
      description: 'Text for button',
      type: 'string'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return __jsx(_button.Button, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true
};

var TemplateLabel = function TemplateLabel(args) {
  return __jsx(_button.Button, args);
};

var Secondary = TemplateLabel.bind({});
exports.Secondary = Secondary;