'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Constants = require('./Constants');

var _reactDnd = require('react-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var knightSource = {
  beginDrag: function beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Knight(_ref) {
  var connectDragSource = _ref.connectDragSource,
      isDragging = _ref.isDragging;

  return connectDragSource(_react2.default.createElement(
    'div',
    { style: {
        opacity: isDragging ? 0.5 : 1,
        fontSize: 55,
        fontWeight: 'bold',
        cursor: 'move',
        backgroundColor: 'papayawhip'
      } },
    _react2.default.createElement(
      'div',
      null,
      'Hello'
    )
  ));
}

exports.default = (0, _reactDnd.DragSource)(_Constants.ItemTypes.KNIGHT, knightSource, collect)(Knight);