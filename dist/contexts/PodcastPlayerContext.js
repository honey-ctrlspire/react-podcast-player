"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PodcastPlayerProvider = exports.PodcastPlayerContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _useAudio = _interopRequireDefault(require("../hooks/useAudio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const PodcastPlayerContext = _react.default.createContext({});

exports.PodcastPlayerContext = PodcastPlayerContext;

const PodcastPlayerProvider = _ref => {
  let {
    children
  } = _ref;
  const {
    audio,
    audioProps
  } = (0, _useAudio.default)();
  return _react.default.createElement(PodcastPlayerContext.Provider, {
    value: _objectSpread({
      audio
    }, audioProps)
  }, children);
};

exports.PodcastPlayerProvider = PodcastPlayerProvider;