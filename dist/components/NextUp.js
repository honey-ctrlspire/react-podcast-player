"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NextUp;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _NextUpButton = _interopRequireDefault(require("./NextUpButton"));

var _QueuePanel = _interopRequireDefault(require("./queue-panel/QueuePanel"));

var _reducer = require("../store/reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NextUp() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    playlist
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const [isOpenQueue, setOpenQueue] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    dispatch((0, _reducer.setQueue)(playlist));
  }, [playlist, dispatch]);

  function handleOpenQueue() {
    setOpenQueue(isOpenQueue => !isOpenQueue);
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_NextUpButton.default, {
    onOpenQueue: handleOpenQueue
  }), _react.default.createElement(_QueuePanel.default, {
    isOpenQueue: isOpenQueue,
    onSwitchQueue: handleOpenQueue
  }));
}