"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NextUpButton;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NextUpButton(_ref) {
  let {
    onOpenQueue
  } = _ref;
  return _react.default.createElement("ul", {
    className: "player-options"
  }, _react.default.createElement("li", {
    className: "player-options-item"
  }, _react.default.createElement(_Button.default, {
    className: "transition-colors bg-mineshaft-10 hover:bg-mineshaft-20 relative p-7 rounded-10",
    "data-tooltip": "Queue",
    onClick: onOpenQueue
  }, _react.default.createElement("svg", {
    height: "18",
    viewBox: "0 0 18 18",
    width: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M.867.109C.387-.144 0 .059 0 .565v4.87c0 .503.39.71.867.457L4.643 3.46c.476-.252.476-.663 0-.916z"
  }), _react.default.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, _react.default.createElement("path", {
    d: "M1 17h16M10 3h7M1 10h16"
  })))))));
}