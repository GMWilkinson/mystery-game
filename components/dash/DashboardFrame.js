"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardFrame = function (_React$Component) {
  _inherits(DashboardFrame, _React$Component);

  function DashboardFrame(props) {
    _classCallCheck(this, DashboardFrame);

    var _this = _possibleConstructorReturn(this, (DashboardFrame.__proto__ || Object.getPrototypeOf(DashboardFrame)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(DashboardFrame, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "main",
        { className: "home-main columns is-multiline" },
        _react2.default.createElement(
          "div",
          { className: "column is-12" },
          _react2.default.createElement(
            "h1",
            { className: "title home-title has-text-centered" },
            "Dashboard"
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "column is-6 is-offset-3" },
          _react2.default.createElement(
            "article",
            { className: "home-text content has-text-centered" },
            _react2.default.createElement(
              "p",
              null,
              "Dashboard text"
            )
          )
        )
      );
    }
  }]);

  return DashboardFrame;
}(_react2.default.Component);

exports.default = DashboardFrame;