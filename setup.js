const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;
// console.log('global.window', global.window);

global.window = document.defaultView;
window.console = global.console;

Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

// console.log('global.window', global.window);
