const JsonML = require('jsonml.js/lib/utils');

const toMermaid = (node) => {
  if (!JsonML.isElement(node)) return;
  
  // search for mermaid code recursively 
  if (JsonML.getTagName(node) !== 'pre') {
    JsonML.getChildren(node).forEach(toMermaid);
    return;
  }

  // Bisheng deliver its plugins with `bisheng-plugin-highlight` by default,
  // which would block our plugin.
  // So we change node tag to `mermaid` here.
  if (JsonML.getAttributes(node).lang === 'mermaid') {
    node[0] = 'mermaid'
  }
}

module.exports = (markdownData) => {
  toMermaid(markdownData.content)
  return markdownData
}
