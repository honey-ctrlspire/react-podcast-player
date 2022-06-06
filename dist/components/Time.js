"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Time;

var _react = _interopRequireDefault(require("react"));

var _useAudioTime = _interopRequireDefault(require("../hooks/useAudioTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Time(_ref) {
  let {
    start,
    end
  } = _ref;
  const {
    getFullTime
  } = (0, _useAudioTime.default)({
    start,
    end
  });
  return _react.default.createElement("span", null, getFullTime());
}