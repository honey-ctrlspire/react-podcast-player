"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProgressBar;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _Time = _interopRequireDefault(require("../components/Time"));

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProgressBar(props) {
  const {
    onMouseDown,
    onMouseUp,
    onMouseOver,
    onMouseOut,
    onMouseMove
  } = props;
  const {
    handleSetProgress
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const audioState = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    holdProgressBar,
    recordsPlayer,
    positionTooltip
  } = audioState;
  const {
    activeBar,
    holding
  } = holdProgressBar;
  const {
    progress,
    duration
  } = recordsPlayer;
  const {
    translate,
    barWidth
  } = positionTooltip;
  const progressBar = progress / duration * 100;
  return _react.default.createElement("div", {
    className: "flex items-center h-12 relative w-full ".concat(activeBar ? 'is-active' : 'is-inactive')
  }, _react.default.createElement("div", {
    className: "text-xs text-mineshaft font-semibold pr-12 right-full opacity-50"
  }, _react.default.createElement(_Time.default, {
    start: progress
  })), _react.default.createElement("div", {
    className: "relative grow shrink basis-0 h-2",
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onMouseMove: onMouseMove
  }, _react.default.createElement("div", {
    className: "absolute h-full w-full left-0 top-0 opacity-10 bg-mineshaft hover:bg-blueribbon"
  }), _react.default.createElement("div", {
    className: "absolute h-full w-0 left-0 top-0 will-change-width max-w-full bg-mineshaft slider-active",
    style: {
      width: "".concat(progressBar, "%")
    }
  }), _react.default.createElement("input", {
    type: "range",
    className: "slider-track-input absolute top-1/2 -left-px  p-0 h-30 cursor-pointer -mt-15 appearance-none -w-full-2 bg-transparent mousetrap",
    step: "1",
    min: "0",
    max: duration,
    "aria-valuemin": 0,
    "aria-valuemax": duration,
    "aria-valuenow": progress,
    value: progress,
    onChange: () => handleSetProgress({
      holding,
      translate,
      barWidth
    }),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  })), _react.default.createElement("div", {
    className: "text-xs text-mineshaft font-semibold ml-15 pr-12 left-full opacity-50"
  }, "-", _react.default.createElement(_Time.default, {
    start: progress,
    end: duration
  })), props.children);
}