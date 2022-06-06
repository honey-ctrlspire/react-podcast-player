"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner() {
  return _react.default.createElement("div", {
    className: "animate-spinner absolute top-2 left-3 w-42 h-42 border-2 border-solid border-transparent rounded-full border-t-mineshaft"
  });
}