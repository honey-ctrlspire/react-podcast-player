"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QueueHead = props => {
  const {
    onClose
  } = props;
  return _react.default.createElement("div", {
    className: "queuelist-head"
  }, _react.default.createElement("div", {
    className: "queuelist-head-title"
  }, "Next up"), _react.default.createElement("div", {
    className: "queuelist-close"
  }, _react.default.createElement("button", {
    type: "button",
    className: "transition-colors hover:bg-athensgray relative p-7 rounded-full tooltip",
    "aria-label": "Close",
    "data-tooltip": "Close",
    onClick: onClose
  }, _react.default.createElement("svg", {
    className: "block svg-icon-chevron-down",
    focusable: "false",
    height: "1em",
    width: "1em",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, _react.default.createElement("path", {
    d: "M6.013 8.998a.61.61 0 0 0 .416-.169l2.661-2.1 2.662-2.102c.654-.517-.12-1.498-.775-.981l-2.483 1.96-2.482 1.96-4.99-3.921c-.656-.515-1.428.468-.773.983L5.597 8.83a.61.61 0 0 0 .416.168z"
  })))));
};

QueueHead.propTypes = {
  onClose: _propTypes.default.func
};
var _default = QueueHead;
exports.default = _default;