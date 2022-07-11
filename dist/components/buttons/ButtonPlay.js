"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonPlay;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonPlay(_ref) {
  let {
    onPlay,
    disabled
  } = _ref;
  return _react.default.createElement(_Button.default, {
    className: "transition-colors relative p-7 rounded-full opacity-50 hover:opacity-100 focus:border-none focus:outline-none",
    "aria-label": "Play",
    onClick: onPlay,
    disabled: disabled
  }, _react.default.createElement("svg", {
    className: "block svg-icon-play",
    focusable: "false",
    width: "24",
    height: "26",
    viewBox: "0 0 24 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, _react.default.createElement("path", {
    d: "M1.75065 0.5C1.47439 0.5 1.20943 0.609747 1.01408 0.805097C0.818733 1.00045 0.708986 1.2654 0.708986 1.54167C0.708984 1.54302 0.708984 1.54438 0.708986 1.54574V13V24.4543C0.708984 24.4556 0.708984 24.457 0.708986 24.4583C0.708986 24.7346 0.818733 24.9996 1.01408 25.1949C1.20943 25.3903 1.47439 25.5 1.75065 25.5C1.96749 25.4994 2.17872 25.4311 2.3549 25.3047L2.35694 25.3067L23.0173 13.946C23.1986 13.8631 23.3523 13.7299 23.4602 13.5622C23.568 13.3945 23.6254 13.1994 23.6257 13C23.6258 12.795 23.5654 12.5946 23.4521 12.4238C23.3388 12.253 23.1777 12.1194 22.9889 12.0397L2.35694 0.693278H2.3549C2.17848 0.567593 1.96727 0.500033 1.75065 0.5Z",
    fill: "#393939"
  })));
}