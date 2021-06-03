"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(process.env.PORT || 3001, function () {
  console.log("%s listening at ".concat(process.env.PORT || 3001)); // eslint-disable-line no-console
});