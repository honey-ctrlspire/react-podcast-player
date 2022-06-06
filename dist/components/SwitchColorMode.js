"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PopperContainer;

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reducer = require("../../store/reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SwitchColorMode = _ref => {
  let {
    changeMode,
    handleChangeMode
  } = _ref;
  return _react.default.createElement("div", {
    className: "relative bg-white  rounded text-mineshaft p-16 w-165 shadow-xl popper-player-mode"
  }, _react.default.createElement("label", {
    className: "flex flex-1 items-center "
  }, _react.default.createElement("div", {
    className: "text-14 text-mineshaft  mr-5"
  }, "Dark mode"), _react.default.createElement("div", {
    className: "flex flex-1 justify-end"
  }, _react.default.createElement("span", {
    className: "switch-mode relative inline-block bg-mineshaft opacity-10 cursor-pointer p-px w-32 transition-colors hover:bg-athensgray rounded-full ".concat(changeMode ? 'is-checked' : '').trim(),
    onClick: evt => {
      evt.preventDefault();
      return handleChangeMode();
    }
  }, _react.default.createElement("input", {
    className: "hidden",
    type: "chgeckbox"
  })))));
};

function PopperContainer() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    mode
  } = (0, _reactRedux.useSelector)(state => state.audio);
  const {
    isOpen,
    changeMode
  } = mode;

  function setIsOpenPopper() {
    dispatch((0, _reducer.setMode)({
      isOpen: !isOpen
    }));
  }

  function handleChangeMode() {
    dispatch((0, _reducer.setMode)({
      changeMode: !changeMode
    }));
  }

  return _react.default.createElement("div", {
    className: "relative"
  }, _react.default.createElement("button", {
    className: "transition-colors hover:bg-athensgray relative p-7 rounded-full ".concat(isOpen ? 'is-active' : 'tooltip'),
    type: "button",
    "aria-label": "Favorite this show",
    "data-tooltip": "View mode",
    onClick: () => setIsOpenPopper()
  }, _react.default.createElement("svg", {
    className: "block svg-icon-options",
    focusable: "false",
    height: "1em",
    width: "1em",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, _react.default.createElement("path", {
    d: "M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }))), _react.default.createElement("div", {
    className: "absolute -top-60 left-1/2 -translate-x-1/2",
    "x-placement": "top",
    style: {
      display: !isOpen ? 'none' : false
    }
  }, isOpen ? _react.default.createElement(SwitchColorMode, {
    changeMode: changeMode,
    handleChangeMode: handleChangeMode
  }) : null, _react.default.createElement("div", {
    className: "popper-arrow absolute h-0 w-0 border-6 border-solid border-transparent"
  })));
}