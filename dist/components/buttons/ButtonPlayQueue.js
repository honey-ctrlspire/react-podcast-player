"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonPlayQueue;

var _react = _interopRequireDefault(require("react"));

var _ButtonPlay = _interopRequireDefault(require("./ButtonPlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonPlayQueue(_ref) {
  let {
    id,
    showId,
    onUpdateShowId,
    onPlayQueue,
    onSwitchControlPlaying
  } = _ref;

  if (showId !== id) {
    return _react.default.createElement("span", {
      className: "play-hover absolute top-6 left-6 rounded-full border-2 border-solid border-white select-none bg-mineshaft"
    }, _react.default.createElement(_ButtonPlay.default, {
      onPlay: () => {
        onUpdateShowId(id);
        onPlayQueue(id);
        return onSwitchControlPlaying();
      }
    }));
  }

  return null;
}