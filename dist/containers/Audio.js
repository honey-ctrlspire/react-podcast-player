"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Audio;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Player = _interopRequireDefault(require("./Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Audio() {
  const {
    mode
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    changeMode
  } = mode;
  return _react.default.createElement("div", {
    className: "fixed left-0 right-0 bottom-0 flex items-center z-10 h-60 px-15",
    "data-theme": changeMode ? 'dark' : null
  }, _react.default.createElement("div", {
    className: "flex items-center mx-auto relative w-full"
  }, _react.default.createElement(_Player.default, null)));
}