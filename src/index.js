const toFn = x => (typeof x === 'function') ? x : () => x

let FP = {}
FP.curry = fn => {
    const f = _args => (...args) => {
        args = args.concat(_args)
        if (args.length >= fn.length)
            return fn.apply(this, args)
        return f(args)
    }
    return f([])
}

const add = (a, b) => a + b
const curryAdd = FP.curry(add)
console.log(curryAdd(4)(2)) // 6
console.log(curryAdd(2, 4)) // 6

FP.compose = (...fns) => (...args) => fns.map(x => toFn(x)).reverse().reduce((args, fn) => [fn(...args)], args)[0]
// FP.compose = (...fns) => (...args) => {
// fns = fns.map(x => toFn(x))
// while (fns.length) {
//     args = [fns.pop().apply(this, args)]
// }
// return args[0]
// }

const inc = n => n + 2
const dob = n => n * 2
const co = FP.compose(inc, dob)
console.log(co(2)) // 6

FP.composeL = (...args) => FP.compose(...args.reverse())

const coL = FP.composeL(inc, dob)
console.log(coL(1)) // 6

FP.pipe = (...args) => (...fns) => fns.map(x => toFn(x)).reduce((args, fn) => [fn(...args)], args)[0]
// FP.pipe = (...args) => (...fns) => {
//     fns = fns.map(x => toFn(x))
//     while (fns.length) {
//         args = [fns.shift().apply(this, args)]
//     }
//     return args[0]
// }

const pp = FP.pipe(1)(inc, dob)
console.log(pp) // 6