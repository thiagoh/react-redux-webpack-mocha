// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
const context = require.context('.', true, /_test\.jsx?$/);
// console.log(context);
// console.log(context.keys());
context.keys().forEach(context);
// module.exports = context;
