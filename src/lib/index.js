
const curry = (fn, arity = fn.length, ...args0) => (...args) => (_args => _args.length >= arity ? fn(..._args) : curry(fn, arity, ..._args))([...args0, ...args])
// const curry = (fn, arity = fn.length, ...args0) => {
//     const f = _args => (...args) => ([...args, ..._args].length >= arity ? fn(...args, ..._args) : f([...args, ..._args]))
//     return f([...args0])
// }

const uncurry = (cfn, ...args0) => (...args) => [...args0, ...args].reduce((fn, arg) => fn(arg), cfn)

const compose = (...fns) => fns.reverse().reduce((fn1, fn2) => (...args) => fn2(fn1(...args)))
// const compose = (...fns) => (...args) => fns.reverse().reduce((args, fn) => [fn(...args)], args)[0]
// const compose = (...fns) => (...args) => {
// while (fns.length) {
//     args = [fns.pop().apply(this, args)]
// }
// return args[0]
// }

const composeL = (...args) => compose(...args.reverse())

const pipe = (...args) => (...fns) => fns.reduce((fn1, fn2) => fn2(fn1(...args)))
// const pipe = (...args) => (...fns) => fns.reduce((args, fn) => [fn(...args)], args)[0]
// const pipe = (...args) => (...fns) => {
//     while (fns.length) {
//         args = [fns.shift().apply(this, args)]
//     }
//     return args[0]
// }

export default {
    curry,
    uncurry,
    compose,
    composeL,
    pipe
}