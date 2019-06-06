'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var boxContents = [{ name: 'hi', id: 1 }, { name: 'hello', id: 2 }, { name: 'howdy', id: 3 }];

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      box: '',
      inPlay: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'play',
    value: function play() {
      if (this.state.inPlay === false) {
        this.setState({
          inPlay: true
        });
      }
    }
  }, {
    key: 'boxes',
    value: function boxes() {
      var _this2 = this;

      var grid = [];
      for (var i = 0; i < 100; i++) {
        grid.push(_react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.play();
            } },
          _react2.default.createElement(_Box2.default, {
            inPlay: this.state.inPlay,
            contents: boxContents[1].name,
            prev: boxContents[0].name,
            next: boxContents[2].name,
            above: boxContents[1].name,
            below: boxContents[0].name
          })
        ));
      }
      return grid;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: 'home-main columns is-multiline' },
        _react2.default.createElement(
          'div',
          { className: 'column is-12' },
          _react2.default.createElement(
            'h1',
            { className: 'title home-title has-text-centered' },
            'Mystery Game'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'column is-6 is-offset-3' },
          _react2.default.createElement(
            'article',
            { className: 'home-text content has-text-centered' },
            _react2.default.createElement(
              'p',
              null,
              'Home page text'
            ),
            _react2.default.createElement(
              'div',
              { className: 'grid-container' },
              this.boxes()
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              { outline: true },
              'hello'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;