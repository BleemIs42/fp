require("babel-register")
var FP = require("../src/lib").default
// var FP = require("../dist/fp.min.js").default
// var FP = require('./../src')

const add = (a, b) => a + b
const curryAdd = FP.curry(add)
console.log(curryAdd(4)(2)) // 6
console.log(curryAdd(2, 4)) // 6

const inc = n => n + 2
const dob = n => n * 2
const co = FP.compose(inc, dob)
console.log(co(2)) // 6

const coL = FP.composeL(inc, dob)
console.log(coL(1)) // 6

const pp = FP.pipe(1)(inc, dob)
console.log(pp) // 6