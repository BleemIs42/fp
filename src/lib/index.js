let FP = {}
FP.curry = fn => {
    const f = _args => (...args) => {
        args = [...args, ..._args]
        if (args.length >= fn.length) return fn(...args)
        return f(args)
    }
    return f([])
}

FP.compose = (...fns) => fns.reverse().reduce((fn1, fn2) => (...args) => fn2(fn1(...args)))
// FP.compose = (...fns) => (...args) => fns.reverse().reduce((args, fn) => [fn(...args)], args)[0]
// FP.compose = (...fns) => (...args) => {
// while (fns.length) {
//     args = [fns.pop().apply(this, args)]
// }
// return args[0]
// }

FP.composeL = (...args) => FP.compose(...args.reverse())

FP.pipe = (...args) => (...fns) => fns.reduce((fn1, fn2) => fn2(fn1(...args)))
// FP.pipe = (...args) => (...fns) => fns.reduce((args, fn) => [fn(...args)], args)[0]
// FP.pipe = (...args) => (...fns) => {
//     while (fns.length) {
//         args = [fns.shift().apply(this, args)]
//     }
//     return args[0]
// }

export default FP