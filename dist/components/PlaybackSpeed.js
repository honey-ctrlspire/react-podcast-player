"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlaybackSpeed;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactTransitionGroup = require("react-transition-group");

var _playbackRate = require("../config/playbackRate.json");

var _reducer = require("../store/reducer");

var _Button = _interopRequireDefault(require("./buttons/Button"));

var _ButtonSpeed = _interopRequireDefault(require("./buttons/ButtonSpeed"));

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PlaybackSpeed() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    audio
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const [openPanel, isPanelOpen] = (0, _react.useState)(false);
  const {
    playbackRate
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const selectedSpeed = playbackRate.text !== 'Normal' ? "".concat(playbackRate.text, "x") : playbackRate.text;

  function handleChangeSpeed(playbackRate) {
    audio.current.playbackRate = playbackRate.value;
    dispatch((0, _reducer.setPlaybackRate)(playbackRate));
    isPanelOpen(false);
  }

  return _react.default.createElement("div", {
    className: "flex items-center justify-end relative w-60"
  }, _react.default.createElement(_Button.default, {
    className: "text-xs transition-colors bg-mineshaft-10 hover:bg-mineshaft-20 relative py-7 px-9  rounded-10" // data-tooltip="Playback playbackRate"
    ,
    onClick: () => isPanelOpen(!openPanel)
  }, selectedSpeed), _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: openPanel,
    timeout: 350,
    classNames: "playback",
    unmountOnExit: true
  }, _react.default.createElement("div", {
    className: "absolute bottom-45 left-0 bg-wildsand transition-transform-opacity duration-200 ease-panel min-w-150"
  }, _playbackRate.speed.map((item, idx) => _react.default.createElement(_ButtonSpeed.default, _extends({
    key: idx,
    onClick: () => handleChangeSpeed(item),
    selectedValue: playbackRate.value
  }, item))))));
}