"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonSpeed;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonSpeed(props) {
  const {
    selectedValue,
    text,
    value,
    onClick
  } = props;
  return _react.default.createElement(_Button.default, {
    onClick: onClick,
    className: "flex items-center text-emperror text-sm py-14 px-20 text-left w-full hover:bg-mercury ".concat(selectedValue === value ? 'bg-mercury' : '')
  }, _react.default.createElement("span", {
    className: "mr-auto"
  }, text), selectedValue === value ? _react.default.createElement("svg", {
    width: "13",
    height: "8",
    viewBox: "0 0 13 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.95 6.4L1.45 2.9L0.75 3.6L4.25 7.1L4.95 7.8L12.05 0.7L11.35 0L4.95 6.4Z",
    fill: "#525252"
  })) : '');
}