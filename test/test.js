// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
const context = require.context('.', true, /[._-]test\.[tj]sx?$/);
context.keys().forEach(context);
module.exports = context;
