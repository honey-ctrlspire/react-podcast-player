"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SliderVolume;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SliderVolume(_ref) {
  let {
    volume,
    onChange
  } = _ref;
  return _react.default.createElement("input", {
    className: "slider-track-input absolute top-1/2 -left-px  p-0 h-30 cursor-pointer -mt-15 appearance-none -w-full-2 slider-volume bg-transparent mousetrap",
    type: "range",
    step: "1",
    min: "0",
    max: "100",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": volume,
    value: volume,
    onChange: onChange
  });
}