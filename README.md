# FP 
FP is a Functionl Program library for Javascript.

# API    
    * curry
        curry(f(a, b))  =>  f(a)(b) / f(a, b)
    * uncurry
        uncurry(curry(f(a, b)))  =>  f(a, b)
    * compose 
        compose(f, g)(x)  => f(g(x))
    * composeL
        composeL(f, g)(x)  =>  g(f(x))
    * pipe
        pipe(x)(f, g)  =>  g(f(x))