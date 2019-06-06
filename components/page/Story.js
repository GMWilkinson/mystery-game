'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FirstPage = function (_React$Component) {
  _inherits(FirstPage, _React$Component);

  function FirstPage(props) {
    _classCallCheck(this, FirstPage);

    var _this = _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(FirstPage, [{
    key: 'handleClick',
    value: function handleClick(pageId) {
      var _this2 = this;

      console.log('In onClick, pageId', pageId);
      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/' + pageId).then(function (res) {
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/first').then(function (res) {
        // console.log({ page: res.data });
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var page = this.state.page;
      console.log('this.state.page is', this.state.page);
      return _react2.default.createElement(
        'section',
        { className: 'main-story' },
        page ? _react2.default.createElement(
          'section',
          { className: 'columns', id: 'pageTop' },
          _react2.default.createElement(
            'div',
            { className: 'column is-6 is-offset-3 page' },
            _react2.default.createElement('h1', { className: 'title' }),
            _react2.default.createElement(
              'p',
              { className: 'story-text' },
              page.text
            ),
            _react2.default.createElement(
              'div',
              null,
              page && page.choices.map(function (choice) {
                return _react2.default.createElement(
                  'div',
                  { className: 'choice-text-box', key: choice._id, onClick: function onClick() {
                      return _this4.handleClick(choice.nextPage);
                    } },
                  _react2.default.createElement(
                    'a',
                    { href: '#pageTop', className: 'choice-text' },
                    choice.text
                  )
                );
              })
            )
          ),
          _react2.default.createElement('div', { className: 'column is-3' })
        ) : _react2.default.createElement(
          'p',
          null,
          'This book has no pages...'
        )
      );
    }
  }]);

  return FirstPage;
}(_react2.default.Component);

exports.default = FirstPage;