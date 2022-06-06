"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireDefault(require("react"));

var _ButtonPlayQueue = _interopRequireDefault(require("../../buttons/ButtonPlayQueue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QueueItem = props => {
  const {
    title,
    author,
    cover,
    id,
    idx,
    onSwitchControlPlaying,
    onRemoveFromQueue,
    onPlayQueue,
    nowPlaying,
    selectedAudio
  } = props;
  let selectedAudioId = selectedAudio ? selectedAudio.id : null;
  return _react.default.createElement("div", {
    className: "cloudcast-item cloudcast-upnext ".concat(selectedAudioId === id ? 'now-playing' : '').trim()
  }, _react.default.createElement("div", {
    className: "cloudcast-upnext-image ".concat(selectedAudioId === id && nowPlaying ? 'is-active' : '').trim()
  }, _react.default.createElement(_ButtonPlayQueue.default, {
    id: id,
    showId: selectedAudioId,
    onSwitchControlPlaying: onSwitchControlPlaying,
    onPlayQueue: onPlayQueue
  }), _react.default.createElement("figure", null, _react.default.createElement("img", {
    src: cover,
    alt: ""
  }), selectedAudioId === id && nowPlaying ? _react.default.createElement("span", {
    className: "equalizer equalizer-inverse"
  }) : null)), _react.default.createElement("div", {
    className: "cloudcast-upnext-details"
  }, _react.default.createElement("div", {
    className: "cloudcast-name"
  }, title), _react.default.createElement("div", {
    className: "cloudcast-owner"
  }, author), _react.default.createElement("div", {
    className: "cloudcast-action"
  }, _react.default.createElement("button", {
    type: "button",
    className: "cloudcast-action-remove tooltip",
    "data-tooltip": "Remove",
    onClick: () => onRemoveFromQueue(idx)
  }, _react.default.createElement("svg", {
    className: "block svg-icon-cancel",
    focusable: "false",
    height: "14",
    width: "14",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, _react.default.createElement("path", {
    d: "M1.75 10.25l8.5-8.5m.002 8.505L1.75 1.75",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeWidth: "1.5"
  }))))));
};

var _default = QueueItem;
exports.default = _default;