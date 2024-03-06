// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
// better to install packages locally
// npm i <packageName>

// global depency - use it in any package
// there is not always need to install packages globally
// npm install -g <packageName>
// sudio npm instal -g <packageName> (mac)

// package.json -manifest files (stores important info about packages/modules)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);