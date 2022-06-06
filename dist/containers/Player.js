"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Player;

var _react = _interopRequireDefault(require("react"));

var _AutoPlay = _interopRequireDefault(require("../components/AutoPlay"));

var _Border = _interopRequireDefault(require("../components/Border"));

var _Controls = _interopRequireDefault(require("../components/Controls"));

var _PlaybackSpeed = _interopRequireDefault(require("../components/PlaybackSpeed"));

var _TimeLine = _interopRequireDefault(require("./TimeLine"));

var _Volume = _interopRequireDefault(require("./Volume"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Player() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Controls.default, null), _react.default.createElement(_TimeLine.default, null), _react.default.createElement(_Volume.default, null), _react.default.createElement(_Border.default, {
    className: "flex items-center border-l border-solid border-mineshaft-10 pl-10 max-h-30"
  }, _react.default.createElement(_PlaybackSpeed.default, null), _react.default.createElement(_AutoPlay.default, null)));
}