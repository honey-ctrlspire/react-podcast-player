"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAudio;

require("core-js/modules/es.number.to-fixed.js");

var _react = require("react");

var _reactRedux = require("react-redux");

var _reducer = require("../store/reducer");

function useAudio() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    audio
  } = (0, _reactRedux.useSelector)(state => state);
  const {
    autoplay,
    playbackRate,
    selectedAudio,
    recordsPlayer
  } = audio;
  const {
    duration,
    nowPlaying
  } = recordsPlayer;
  const intervalId = (0, _react.useRef)();
  const audioElement = (0, _react.useRef)(document.createElement('audio'));
  const handleUpdateProgress = (0, _react.useCallback)(() => {
    intervalId.current = setInterval(() => {
      const progress = audioElement.current.currentTime;
      dispatch((0, _reducer.setRecordsPlayer)({
        progress
      }));
    }, 900);
  }, [dispatch]);
  const handleClearInterval = (0, _react.useCallback)(() => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  }, []);
  const handleLoading = (0, _react.useCallback)(() => {
    dispatch((0, _reducer.setRecordsPlayer)({
      load: false
    }));
  }, [dispatch]);
  const handlePlay = (0, _react.useCallback)(() => {
    handleUpdateProgress();
    dispatch((0, _reducer.setRecordsPlayer)({
      nowPlaying: true
    }));
  }, [dispatch, handleUpdateProgress]);
  const handlePause = (0, _react.useCallback)(() => {
    handleClearInterval();
    dispatch((0, _reducer.setRecordsPlayer)({
      nowPlaying: false
    }));
  }, [dispatch, handleClearInterval]);
  const handleCanPlay = (0, _react.useCallback)(() => {
    const duration = audioElement.current.duration;
    dispatch((0, _reducer.setRecordsPlayer)({
      duration
    }));
  }, [dispatch]);
  (0, _react.useEffect)(() => {
    audioElement.current.src = selectedAudio.url;
    audioElement.current.autoplay = autoplay;
    audioElement.current.playbackRate = playbackRate.value;
    audioElement.current.load(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAudio, audioElement]);
  (0, _react.useEffect)(() => {
    audioElement.current.addEventListener('canplay', handleCanPlay);
    audioElement.current.addEventListener('play', handlePlay);
    audioElement.current.addEventListener('pause', handlePause);
    audioElement.current.addEventListener('loadedmetadata', handleLoading);
    return () => {
      // Clean up the event listeners
      audioElement.current.removeEventListener('canplay', handleCanPlay);
      audioElement.current.removeEventListener('play', handlePlay);
      audioElement.current.removeEventListener('pause', handlePause);
      audioElement.current.removeEventListener('loadedmetadata', handleLoading);
    };
  }, [handleCanPlay, handlePlay, handlePause, handleLoading]);

  function handleSwitchControlPlaying() {
    if (!audioElement.current.src.length) {
      return;
    }

    if (nowPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  }

  function handleSetProgress(_ref) {
    let {
      holding,
      translate,
      barWidth
    } = _ref;

    if (holding) {
      const progress = (translate / barWidth * duration).toFixed(6);
      dispatch((0, _reducer.setRecordsPlayer)({
        progress
      }));
    }
  }

  function handleAudioCurrentTime(time) {
    const progress = audioElement.current.currentTime = time;
    dispatch((0, _reducer.setRecordsPlayer)({
      progress
    }));
  }

  return {
    audio: audioElement,
    audioProps: {
      handleCanPlay,
      handlePlay,
      handlePause,
      handleLoading,
      handleSetProgress,
      handleClearInterval,
      handleUpdateProgress,
      handleSwitchControlPlaying,
      handleAudioCurrentTime
    }
  };
}