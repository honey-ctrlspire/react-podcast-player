"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _App = _interopRequireDefault(require("./App"));

var _store = _interopRequireDefault(require("./store"));

var _PodcastPlayerContext = require("./contexts/PodcastPlayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AudioPlayer = _ref => {
  let {
    playlist = []
  } = _ref;
  if (!playlist.length) return null;
  return _react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, _react.default.createElement(_PodcastPlayerContext.PodcastPlayerProvider, null, _react.default.createElement(_App.default, {
    playlist: playlist
  })));
};

var _default = AudioPlayer; // render(<AudioPlayer />, document.getElementById('root'));

exports.default = _default;