"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QueuePanel;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactCustomScrollbars = require("react-custom-scrollbars");

var _reactTransitionGroup = require("react-transition-group");

var _QueuePanelView = _interopRequireDefault(require("./QueuePanelView"));

var _QueuePanelHead = _interopRequireDefault(require("./QueuePanelHead"));

var _QueuePanelItem = _interopRequireDefault(require("./QueuePanelItem"));

var _reducer = require("../../../store/reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function QueuePanel(_ref) {
  let {
    onSwitchQueue,
    isOpenQueue
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    queue: {
      queue
    },
    audio: {
      selectedAudio
    }
  } = (0, _reactRedux.useSelector)(state => state);

  function handleRemoveFromQueue(index) {
    dispatch((0, _reducer.removeFromQueue)(index));
  }

  function handlePlayQueueItem(item) {
    dispatch((0, _reducer.setAudioState)({
      selectedAudio: item
    }));
  }

  function getDataQueue() {
    if (queue.length) {
      return queue.map((item, idx) => _react.default.createElement(_QueuePanelItem.default, _extends({}, item, {
        idx: idx,
        key: item.id,
        onRemoveFromQueue: handleRemoveFromQueue,
        onPlayQueue: handlePlayQueueItem,
        selectedAudio: selectedAudio
      })));
    }

    return _react.default.createElement("span", {
      className: "up-next-learn"
    }, "there is no show in line");
  }

  return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isOpenQueue,
    timeout: 350,
    classNames: "queue",
    unmountOnExit: true
  }, _react.default.createElement(_QueuePanelView.default, null, _react.default.createElement(_QueuePanelHead.default, {
    onClose: onSwitchQueue
  }), _react.default.createElement(_reactCustomScrollbars.Scrollbars, {
    style: {
      height: 'calc(100% - 65px)'
    },
    renderThumbVertical: props => _react.default.createElement("div", _extends({}, props, {
      className: "rounded bg-frenchgray"
    }))
  }, _react.default.createElement("div", {
    className: "queuelist-content"
  }, getDataQueue()))));
}