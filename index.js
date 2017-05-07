const toFunction = x => {
    if(typeof x === 'function') return x
    return () => x
}
const slice = function(ctx){
    return [].slice.apply(ctx, [].slice.call(arguments, 1))
}

let FP = {}
FP.curry = fn => {
    const argsL = fn.length

    const f = function() {
        return function () {
            arguments = [].concat(slice(arguments));
            if (arguments.length >= argsL) return fn.apply(this, arguments);
            return f(arguments);
        }
    }
    return f()
}

// const add = (a, b) => a + b
// const curryAdd = FP.curry(add)
// console.log(curryAdd(1, 2)) // 3

FP.compose = function(){
    let fns = slice(arguments).map( x => toFunction(x))
    let i = fns.length
    return function () {
        while (i--) {
            arguments = [fns[i].apply(this, slice(arguments))]
        }
        return arguments[0]
    }
}

FP.pipe = function(){
    const _args = slice(arguments)
    return function(){
        let fns = slice(arguments).map( x => toFunction(x)).reverse()
        let i = fns.length
        arguments = _args
        while (i--) {
            arguments = [fns[i].apply(this, arguments)]
        }
        return arguments[0]
    }
}

FP.composeL = function() {
    return FP.compose.apply(this, slice(arguments).reverse())
}

// const inc = n => n + 1
// const dob = n => n * 2
// const co = FP.compose(inc, dob)
// console.log(co(2))  // 5
// const coR = FP.composeL(inc, dob)
// console.log(coR(2)) // 6
// const pp = FP.pipe(2)(inc, dob)
// console.log(pp)     // 6