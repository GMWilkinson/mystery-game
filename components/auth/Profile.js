'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _MyBookBox = require('./MyBookBox');

var _MyBookBox2 = _interopRequireDefault(_MyBookBox);

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/books/unfinished').then(function (result) {
        return _this2.setState({ books: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var username = (0, _auth.decodeToken)().username;
      console.log('username is', username);
      return _react2.default.createElement(
        'section',
        { className: 'page' },
        _react2.default.createElement(
          'div',
          null,
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            'h1',
            null,
            (0, _auth.decodeToken)().username,
            's Profile ',
            _react2.default.createElement('img', { className: 'image is-64x64', src: (0, _auth.decodeToken)().image })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            this.state.books && this.state.books.map(function (book) {
              return _react2.default.createElement(
                'div',
                { className: 'column is-6', key: book._id },
                function () {
                  if (book.author === username) {
                    return _react2.default.createElement(
                      'div',
                      { className: 'card' },
                      _react2.default.createElement(
                        'div',
                        { className: 'card-header' },
                        _react2.default.createElement(
                          'h2',
                          { className: 'blue' },
                          book.title
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                          'p',
                          null,
                          book.blurb
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                          'p',
                          { className: 'card-footer-item', onClick: function onClick() {
                              return _this3.deleteBook(book._id);
                            } },
                          'Delete'
                        )
                      )
                    );
                  }
                }()
              );
            })
          )
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;