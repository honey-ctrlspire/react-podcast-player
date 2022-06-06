"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QueuePanel = _ref => {
  let {
    children
  } = _ref;
  return _react.default.createElement("div", {
    className: "absolute bottom-70 right-0  w-570 h-575 bg-white rounded-md transition-transform-opacity duration-200 ease-panel shadow-2xl"
  }, children);
};

var _default = QueuePanel;
exports.default = _default;