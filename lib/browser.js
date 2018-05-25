'use strict';

// I have no idea why they wrote browser part of plugin in ES5

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var mermaidAPI = require('mermaid').mermaidAPI;

var MermaidContainer = function (_React$Component) {
  _inherits(MermaidContainer, _React$Component);

  function MermaidContainer(props) {
    _classCallCheck(this, MermaidContainer);

    var _this = _possibleConstructorReturn(this, (MermaidContainer.__proto__ || Object.getPrototypeOf(MermaidContainer)).call(this, props));

    _this.state = { diagram: 'Loading' };
    return _this;
  }

  _createClass(MermaidContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      mermaidAPI.render('mermaid', this.props.content, function (html) {
        return _this2.setState({ diagram: html });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.diagram } });
    }
  }]);

  return MermaidContainer;
}(React.Component);

module.exports = function () {
  return {
    converters: [[function (node) {
      if (node.length > 2) {
        if (node[0] === 'mermaid') {
          if (node[1].lang === 'mermaid' && node[2].length >= 2) {
            return true;
          }
        }
      }
      return false;
    }, function (node, index) {
      // node[2][1] is the content of mermaid tag
      return React.createElement(MermaidContainer, { key: index, index: index, content: node[2][1] });
    }]]
  };
};
