"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Border;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Border(_ref) {
  let {
    className,
    children
  } = _ref;
  return _react.default.createElement("div", {
    className: className
  }, children);
}