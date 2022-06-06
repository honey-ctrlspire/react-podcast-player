"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonGroup;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(_ref) {
  let {
    children
  } = _ref;
  return _react.default.createElement("div", null, _react.default.createElement("ul", {
    className: "flex items-center"
  }, children));
}