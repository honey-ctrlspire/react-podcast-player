"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlayerActions;

var _react = _interopRequireDefault(require("react"));

var _SwitchColorMode = _interopRequireDefault(require("./player/SwitchColorMode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AddToFavoritesBtn from '../../buttons/ButtonFavorite';
function PlayerActions() {
  return _react.default.createElement("div", {
    className: "flex"
  }, _react.default.createElement("ul", {
    className: "flex items-center"
  }, _react.default.createElement("li", {
    className: "relative"
  }, _react.default.createElement(_SwitchColorMode.default, null))));
}