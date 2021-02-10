const connect = require('./client'); // connect function
const setupInput = require('./input'); // setupInput function

console.log('Connecting...');

setupInput(connect());
