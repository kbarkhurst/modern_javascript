console.log("Hello from Javascript");

var dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
console.log(dayjs().format());

var equal = require('fast-deep-equal');

// Babel Input: ES2015 arrow function
console.log(equal({foo: 'pig'}, {foo: 'waffle'})); // true