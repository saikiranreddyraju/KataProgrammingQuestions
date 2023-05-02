/*
Function Composition:

Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability.
It is explained well here, but this is my explanation, in simple mathematical notation:
f3 = compose( f1 f2 )
   Is equivalent to...
f3(a) = f1( f2( a ) )
Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. 
Remember that the resulting composed function may be passed multiple arguments!
compose(f , g)(x)
=> f( g( x ) )


function compose(f,g) {
    return function() {
      return f(g.apply(this, arguments)); 
      // The apply() method calls the specified function with a given this value, and arguments
      
      // return f(g(...(this, arguments)));
      // The same effect can be achieved with the spread syntax.
    }
}
*/
function f1(n) {
  return n;
}
function f2(x) {
  return x;
}

let f3 = f1(f2(2));
console.log(f3);
