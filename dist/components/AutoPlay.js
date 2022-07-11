"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AutoPlay;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _Button = _interopRequireDefault(require("./buttons/Button"));

var _reducer = require("../store/reducer");

var _PodcastPlayerContext = require("../contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AutoPlay() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    audio
  } = (0, _react.useContext)(_PodcastPlayerContext.PodcastPlayerContext);
  const {
    autoplay
  } = (0, _reactRedux.useSelector)(state => state.audio);

  function handleChangeAutoPlay() {
    audio.current.autoplay = !autoplay;
    dispatch((0, _reducer.setAutoplay)(!autoplay));
  }

  return _react.default.createElement(_Button.default, {
    className: "ml-8 text-xs rounded-10 py-7 px-14 w-full max-w-100 focus:border-none focus:outline-none ".concat(autoplay ? 'bg-mineshaft hover:bg-black text-white' : 'bg-mineshaft-10 hover:bg-mineshaft-20 text-mineshaft'),
    onClick: handleChangeAutoPlay
  }, "Autoplay ".concat(autoplay ? 'On' : 'Off'));
}