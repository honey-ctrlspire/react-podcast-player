"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonControls;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ButtonPlay = _interopRequireDefault(require("./ButtonPlay"));

var _ButtonPause = _interopRequireDefault(require("./ButtonPause"));

var _ButtonSeekBack = _interopRequireDefault(require("./ButtonSeekBack"));

var _ButtonSeekForward = _interopRequireDefault(require("./ButtonSeekForward"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _PodcastPlayerContext = require("../../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ButtonControls(props) {
  const {
    onSeekBack,
    onSeekForward,
    onPlayerDisabledSeekBack,
    onPlayerDisabledSeekForward
  } = props;
  const {
    handleSwitchControlPlaying
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const {
    recordsPlayer
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    load,
    nowPlaying
  } = recordsPlayer;
  return _react.default.createElement(_ButtonGroup.default, null, _react.default.createElement("li", {
    className: "relative"
  }, _react.default.createElement(_ButtonSeekBack.default, {
    seconds: 15,
    disabled: onPlayerDisabledSeekBack() || load,
    onSeekBack: onSeekBack
  })), _react.default.createElement("li", {
    className: "relative"
  }, !nowPlaying ? _react.default.createElement(_ButtonPlay.default, {
    onPlay: handleSwitchControlPlaying,
    disabled: load
  }) : _react.default.createElement(_ButtonPause.default, {
    onPause: handleSwitchControlPlaying,
    disabled: load
  }), load ? _react.default.createElement(_Spinner.default, null) : null), _react.default.createElement("li", {
    className: "relative"
  }, _react.default.createElement(_ButtonSeekForward.default, {
    seconds: 15,
    onSeekForward: onSeekForward,
    disabled: onPlayerDisabledSeekForward() || load
  })));
}