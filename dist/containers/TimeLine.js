"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeLine;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _Tooltip = _interopRequireDefault(require("../components/Tooltip"));

var _reducer = require("../store/reducer");

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TimeLine() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const audioState = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    holdProgressBar,
    recordsPlayer
  } = audioState;
  const {
    activeBar,
    holding
  } = holdProgressBar;
  const {
    progress
  } = recordsPlayer;
  const {
    audio,
    handleClearInterval,
    handleUpdateProgress
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  let newMouseMoveFunction = (0, _react.useRef)(null);

  function handleMouseOver() {
    dispatch((0, _reducer.setHoldProgressBar)({
      activeBar: !activeBar
    }));
  }

  function handleMouseOut() {
    dispatch((0, _reducer.setHoldProgressBar)({
      activeBar: !activeBar
    }));
  }

  function handleMouseDown() {
    if (!holding) {
      handleClearInterval();
      dispatch((0, _reducer.setHoldProgressBar)({
        holding: !holding
      }));
    }
  }

  function handleMouseUp() {
    if (holding) {
      audio.current.currentTime = progress;
      handleUpdateProgress();
      dispatch((0, _reducer.setHoldProgressBar)({
        holding: !holding
      }));
    }
  }

  function handleMouseMove(callback) {
    newMouseMoveFunction.current = callback;
  }

  function handleTooltip(_ref) {
    let {
      translate,
      barWidth
    } = _ref;
    dispatch((0, _reducer.setPositionTooltip)({
      translate,
      barWidth
    }));
  }

  function handlerMouseMove(evt) {
    const translate = evt.clientX - evt.target.getBoundingClientRect().left;
    const barWidth = evt.target.getBoundingClientRect().width;

    if (translate >= 0) {
      handleTooltip({
        translate,
        barWidth
      });
    }
  }

  return _react.default.createElement("div", {
    className: "grow m-auto max-w-500 w-full"
  }, _react.default.createElement(_ProgressBar.default, {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onMouseMove: handlerMouseMove
  }, _react.default.createElement(_Tooltip.default, {
    onMouseMove: handleMouseMove,
    onChange: null
  })));
}