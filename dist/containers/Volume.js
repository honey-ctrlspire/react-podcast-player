"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Volume;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireWildcard(require("react"));

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

var _Button = _interopRequireDefault(require("../components/buttons/Button"));

var _SliderVolume = _interopRequireDefault(require("../components/SliderVolume"));

var _ButtonVolumeHigh = _interopRequireDefault(require("../components/buttons/ButtonVolumeHigh"));

var _ButtonVolumeLow = _interopRequireDefault(require("../components/buttons/ButtonVolumeLow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Volume() {
  const coxtent = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const audio = coxtent.audio.current;
  const [volume, setVolume] = (0, _react.useState)(100);

  function handleAudioVolume(volume) {
    audio.volume = volume;
  }

  function handleChangeVolume(evt) {
    const volume = parseInt(evt.target.value, 10);
    handleAudioVolume(volume / 100);
    setVolume(volume);
  }

  function handleVolumeSwitch() {
    if (volume > 0) {
      handleAudioVolume(0);
      setVolume(0);
    } else {
      handleAudioVolume(1);
      setVolume(100);
    }
  }

  return _react.default.createElement("div", {
    className: "flex items-center pr-25"
  }, _react.default.createElement(_Button.default, {
    className: "mr-14 w-22 h-17 focus:border-none focus:outline-none",
    onClick: handleVolumeSwitch
  }, volume ? _react.default.createElement(_ButtonVolumeHigh.default, null) : _react.default.createElement(_ButtonVolumeLow.default, null)), _react.default.createElement("div", {
    className: "w-85"
  }, _react.default.createElement("div", {
    className: "relative flex-grow flex-shrink basis-0 h-2"
  }, _react.default.createElement("div", {
    className: "absolute h-full w-full left-0 top-0 bg-mineshaft opacity-10"
  }), _react.default.createElement("div", {
    className: "absolute h-full w-0 left-0 top-0 bg-mineshaft will-change-width max-w-full",
    style: {
      width: "".concat(volume + 1, "%")
    }
  }), _react.default.createElement(_SliderVolume.default, {
    volume: volume,
    onChange: handleChangeVolume
  }))));
}