const path = require('path');
const _root = path.resolve(__dirname, './');

const root = (...args) => {
  return path.join(_root, ...args);
};

exports.root = root;
