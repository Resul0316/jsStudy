// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//////////////////
// Cohersion Operators

// 3 < 2 returns false
// Number(false) returns 0
// console.log(0 < 1) returns true
console.log(Number(false))
console.log(3 < 2 < 1)

// or vise versa for 
console.log(1 < 2 <3);
// Number(true) = 1
console.log(Number(true) < 3)

// or
// Number(null) = 0
//////////////////

///////////////

// "3" == 3 is true
// "3" ==== 3 is false --> Strict equality
// 0 !== false is true  --> strict unequality
// 0 1= false true

// Existence and Boolean

// Boolean(undefined) = false
// Boolean(null) = false
// Boolean('') = false






