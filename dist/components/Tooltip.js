"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tooltip;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Time = _interopRequireDefault(require("./Time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip() {
  const {
    audio
  } = (0, _reactRedux.useSelector)(state => state);
  const {
    positionTooltip,
    holdProgressBar,
    recordsPlayer
  } = audio;
  const {
    activeBar
  } = holdProgressBar;
  const {
    translate,
    barWidth
  } = positionTooltip;
  const {
    duration
  } = recordsPlayer;

  if (activeBar) {
    return _react.default.createElement("div", {
      className: "absolute bg-mineshaft rounded bottom-20 text-white left-0 -ml-24 p-4 text-center w-48 text-16 will-change-transform",
      style: {
        transform: "translate3d(".concat(translate, "px,0,0)")
      }
    }, _react.default.createElement(_Time.default, {
      start: translate / barWidth * duration
    }));
  }

  return null;
}