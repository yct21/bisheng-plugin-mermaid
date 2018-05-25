'use strict'

// I have no idea why they wrote browser part of plugin in ES5
var React = require('react')
var mermaidAPI = require('mermaid').mermaidAPI

class MermaidContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { diagram: 'Loading' }
  }
  
  componentDidMount() {
    mermaidAPI.render('mermaid', this.props.content, (html) => this.setState({diagram: html}));
  }

  render() {
    return <div dangerouslySetInnerHTML={{__html: this.state.diagram}}/>
  }
}

module.exports = function() {
  return {
    converters: [
      [
        function(node) {
          if (node.length > 2) { 
            if (node[0] === 'mermaid') {
              if (node[1].lang === 'mermaid' && node[2].length >= 2) {
                return true
              }
            }
          }
          return false
        },
        function(node, index) {
          // node[2][1] is the content of mermaid tag
          return <MermaidContainer key={index} index={index} content={node[2][1]} />
        },
      ]
    ], 
  };
}
