// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
const { add, divide, multiply } = require('./test-module-2'); // destructured version
console.log(multiply(2, 5));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

/*
returns this:
Hello from the module  ** only gives this the first time its read (execution step)
Log this beautiful text ** the rest of the logs are run from cache 
Log this beautiful text
Log this beautiful text
*/
