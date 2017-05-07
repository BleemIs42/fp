# FP 
FP is a Functionl Program library for Javascript.

# API    
    * curry
        FP.curry(f(a, b))  =>  f(a)(b) / f(a, b)
    * compose 
        FP.compose(f, g)(x)  => f(g(x))
    * composeL
        FP.composeL(f, g)(x)  =>  g(f(x))
    * pipe
        FP.pipe(x)(f, g)  =>  g(f(x))