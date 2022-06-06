"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRecordsPlayer = exports.setPositionTooltip = exports.setPlaybackRate = exports.setMode = exports.setHoldProgressBar = exports.setClodcastDetails = exports.setAutoplay = exports.setAudioState = exports.default = exports.audioSlice = void 0;

var _redux = require("redux");

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const audioSlice = (0, _toolkit.createSlice)({
  name: 'audio',
  initialState: {
    autoplay: true,
    clodcastDetails: {
      title: null,
      author: null,
      cover: null
    },
    holdProgressBar: {
      holding: false,
      activeBar: false
    },
    mode: {
      isOpen: false,
      changeMode: false
    },
    playlist: [],
    positionTooltip: {
      translate: 0,
      barWidth: 0
    },
    radioShowState: {},
    recordsPlayer: {
      nowPlaying: false,
      progress: 0,
      duration: 0,
      load: false
    },
    selectedAudio: {},
    playbackRate: {
      text: '1.5',
      value: 1.5
    }
  },
  reducers: {
    setPlaybackRate: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        playbackRate: action.payload
      });
    },
    setAutoplay: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        autoplay: action.payload
      });
    },
    setAudioState: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload);
    },
    setClodcastDetails: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        clodcastDetails: _objectSpread(_objectSpread({}, state.clodcastDetails), action.payload)
      });
    },
    setMode: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: _objectSpread(_objectSpread({}, state.mode), action.payload)
      });
    },
    setHoldProgressBar: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        holdProgressBar: _objectSpread(_objectSpread({}, state.holdProgressBar), action.payload)
      });
    },
    setRecordsPlayer: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        recordsPlayer: _objectSpread(_objectSpread({}, state.recordsPlayer), action.payload)
      });
    },
    setPositionTooltip: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        positionTooltip: _objectSpread(_objectSpread({}, state.positionTooltip), action.payload)
      });
    }
  }
}); // Action creators are generated for each case reducer function

exports.audioSlice = audioSlice;
const {
  setAutoplay,
  setAudioState,
  setClodcastDetails,
  setHoldProgressBar,
  setMode,
  setPositionTooltip,
  setRecordsPlayer,
  setPlaybackRate
} = audioSlice.actions;
exports.setPlaybackRate = setPlaybackRate;
exports.setRecordsPlayer = setRecordsPlayer;
exports.setPositionTooltip = setPositionTooltip;
exports.setMode = setMode;
exports.setHoldProgressBar = setHoldProgressBar;
exports.setClodcastDetails = setClodcastDetails;
exports.setAudioState = setAudioState;
exports.setAutoplay = setAutoplay;
const rootReducer = (0, _redux.combineReducers)({
  audio: audioSlice.reducer
});
var _default = rootReducer;
exports.default = _default;