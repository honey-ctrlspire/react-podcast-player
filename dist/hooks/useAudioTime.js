"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAudioTime;

function useAudioTime(_ref) {
  let {
    start,
    end
  } = _ref;

  function secondTime(time) {
    switch (true) {
      case time === 0:
        return '00';

      case time >= 10:
        return time;

      default:
        return "0".concat(time);
    }
  }

  function makeTime(hour, minute, second) {
    const sec = secondTime(second);
    const min = secondTime(minute);

    if (hour === 0) {
      return "".concat(minute, ":").concat(sec);
    }

    return "".concat(hour, ":").concat(min, ":").concat(sec);
  }

  function getFullTime() {
    let remaining = !end ? start : Math.abs(start - end);

    const hour = hour => {
      remaining -= hour * 60 * 60;
      return hour;
    };

    const minute = minute => {
      remaining -= minute * 60;
      return minute;
    };

    const second = () => Math.floor(remaining);

    return makeTime(hour(Math.floor(remaining / 3600)), minute(Math.floor(remaining / 60)), second());
  }

  return {
    getFullTime
  };
}