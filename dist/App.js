"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _Audio = _interopRequireDefault(require("./containers/Audio"));

var _reducer = require("./store/reducer");

require("./styles/app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function App(_ref) {
  let {
    playlist
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    dispatch((0, _reducer.setAudioState)({
      playlist,
      selectedAudio: playlist[0]
    }));
    dispatch((0, _reducer.setRecordsPlayer)({
      load: true
    }));
  }, [playlist, dispatch]);
  return _react.default.createElement("main", null, _react.default.createElement(_Audio.default, {
    playlist: playlist
  }));
}