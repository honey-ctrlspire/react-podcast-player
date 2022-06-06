"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonSeekBack;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonSeekBack(_ref) {
  let {
    disabled,
    onSeekBack
  } = _ref;
  return _react.default.createElement(_Button.default, {
    className: "transition-colors opacity-50 hover:opacity-100 relative p-7 rounded-full back tooltip",
    "data-tooltip": "\u0421ome back",
    disabled: disabled,
    onClick: onSeekBack
  }, _react.default.createElement("div", {
    className: "flex items-center"
  }, _react.default.createElement("svg", {
    width: "19",
    height: "21",
    viewBox: "0 0 19 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    d: "M7.41897 0.0712468C7.25069 0.0552013 7.08028 0.113975 6.95624 0.238013L5.22548 1.96877C5.1124 2.08108 5.05571 2.22823 5.05571 2.37592C5.05571 2.52361 5.1124 2.67076 5.22548 2.78307L6.95624 4.51383C7.12085 4.67921 7.36809 4.72926 7.58424 4.64003C7.79962 4.5508 7.94031 4.33975 7.94031 4.10668V3.19022L9.26392 4.51383C9.42853 4.67921 9.67576 4.72926 9.89192 4.64003C10.1073 4.5508 10.248 4.33975 10.248 4.10668V3.18271C14.1419 3.56746 17.171 6.84008 17.171 10.8374C17.171 15.0947 13.7361 18.5297 9.47876 18.5297C5.22145 18.5297 1.7865 15.0947 1.7865 10.8374C1.7865 8.70829 2.64705 6.79108 4.04009 5.39874C4.11391 5.32786 4.17285 5.24296 4.21346 5.14901C4.25406 5.05507 4.27551 4.95397 4.27655 4.85163C4.27759 4.74929 4.2582 4.64778 4.21952 4.55303C4.18083 4.45828 4.12363 4.3722 4.05127 4.29983C3.9789 4.22746 3.89282 4.17026 3.79807 4.13158C3.70332 4.09289 3.6018 4.0735 3.49946 4.07454C3.39713 4.07559 3.29602 4.09704 3.20208 4.13764C3.10814 4.17824 3.02324 4.23718 2.95236 4.311C1.28234 5.98018 0.248047 8.2927 0.248047 10.8374C0.248047 15.9262 4.38997 20.0681 9.47876 20.0681C14.5675 20.0681 18.7095 15.9262 18.7095 10.8374C18.7095 6.00833 14.9774 2.03906 10.248 1.64576V0.645161C10.248 0.412086 10.1073 0.201042 9.89192 0.111811C9.67653 0.0225813 9.4293 0.072629 9.26392 0.238013L7.94031 1.56162V0.645161C7.94031 0.412086 7.79962 0.201042 7.58424 0.111811C7.53039 0.0895039 7.47507 0.0765954 7.41897 0.0712468ZM9.8213 8.17366L9.5659 11.3482H10.7783C10.9506 11.0744 11.2216 10.9005 11.6046 10.9005C12.1077 10.9005 12.4685 11.2627 12.4685 11.8034C12.4685 12.3334 12.1122 12.6778 11.6092 12.6778C11.1545 12.6778 10.7941 12.4152 10.7303 12.0168H9.47876C9.49799 13.0006 10.3402 13.7416 11.5986 13.74C12.9056 13.74 13.7681 12.9404 13.7681 11.7689C13.7681 10.7135 13.032 9.95099 12.0028 9.95099C11.4466 9.95099 11.0634 10.1692 10.8534 10.5069H10.7828L10.8835 9.24787H13.427V8.17366H9.8213ZM6.50552 8.17516L5.12782 9.11416V10.3011L6.43491 9.41764H6.50552V13.5958H7.88472V8.17516H6.50552Z",
    fill: "#393939"
  }))));
}