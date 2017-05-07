const toFn= x => {
    if (typeof x === 'function') return x
    return () => x
}
const slice = (arr, ...args) => [].slice.apply(arr, args)

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
console.log(curryAdd(2)(3)) // 5
console.log(curryAdd(1, 2)) // 3

FP.compose = (...fns) => (...args) => {
    fns = fns.map(x => toFn(x))
    while (fns.length) {
        args = [fns.pop().apply(this, args)]
    }
    return args[0]
}

const inc = n => n + 1
const dob = n => n * 2
const co = FP.compose(inc, dob)
console.log(co(2))  // 5

FP.composeL = (...args) => FP.compose.apply(this, args.reverse())

const coL = FP.composeL(inc, dob)
console.log(coL(2)) // 6

FP.pipe = (...args) => (...fns) => {
    fns = fns.map(x => toFn(x))
    while (fns.length) {
        args = [fns.shift().apply(this, args)]
    }
    return args[0]
}

const pp = FP.pipe(2)(inc, dob)
console.log(pp)     // 6