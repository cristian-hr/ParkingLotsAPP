"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var router = (0, _express.Router)();
router.get("/:location/:page", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$params, location, page, resp;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, location = _req$params.location, page = _req$params.page;
            _context.prev = 1;
            _context.next = 4;
            return _axios["default"].get("".concat(process.env.API_URL, "&location=").concat(location, "&limit=20").concat(page > 1 ? "&offset=".concat(page * 20) : ""), {
              headers: {
                "Authorization": "Bearer ".concat(process.env.API_KEY)
              }
            });

          case 4:
            resp = _context.sent;
            res.json(resp.data);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;