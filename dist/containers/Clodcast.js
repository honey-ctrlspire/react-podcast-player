"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Clodcast;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Clodcast() {
  const {
    selectedAudio
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    author,
    cover,
    show
  } = selectedAudio;
  return _react.default.createElement("div", {
    className: "player-cloudcast",
    dir: "ltr"
  }, _react.default.createElement("div", {
    className: "player-cloudcast-image"
  }, _react.default.createElement("figure", null, _react.default.createElement("img", {
    src: cover,
    alt: ""
  }))), _react.default.createElement("div", {
    className: "player-cloudcast-details"
  }, _react.default.createElement("div", {
    className: "player-cloudcast-title"
  }, show), _react.default.createElement("div", {
    className: "player-cloudcast-author"
  }, author)));
}