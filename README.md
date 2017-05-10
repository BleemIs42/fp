# FP 
FP is a Functionl Program library for Javascript.

# API    
    * curry
        curry(f(a, b))  =>  f(a)(b) / f(a, b)
        // need arity
        curry(f(...args, arity)) 
    * uncurry
        uncurry(curry(f(a, b)))  =>  f(a, b)
        uncurry(curry(f(...args, arity))) == curry(f(...args, arity))
    * compose 
        compose(f, g)(x)  => f(g(x))
    * composeL
        composeL(f, g)(x)  =>  g(f(x))
    * pipe
        pipe(x)(f, g)  =>  g(f(x))