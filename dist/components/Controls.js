"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Controls;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _ButtonControls = _interopRequireDefault(require("./buttons/ButtonControls"));

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controls() {
  const {
    audio,
    handleAudioCurrentTime
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const {
    recordsPlayer
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    progress
  } = recordsPlayer;

  function handleSeekForward() {
    handleAudioCurrentTime(progress + 15);
  }

  function handleSeekBack() {
    handleAudioCurrentTime(progress - 15);
  }

  function handlePlayerDisabledSeekBack() {
    if (audio.current.currentTime < 15) {
      return true;
    }

    return false;
  }

  function handlePlayerDisabledSeekForward() {
    if (audio.current.currentTime === audio.current.duration) {
      return true;
    }

    return false;
  }

  return _react.default.createElement(_ButtonControls.default, {
    onSeekForward: handleSeekForward,
    onSeekBack: handleSeekBack,
    onPlayerDisabledSeekBack: handlePlayerDisabledSeekBack,
    onPlayerDisabledSeekForward: handlePlayerDisabledSeekForward
  });
}