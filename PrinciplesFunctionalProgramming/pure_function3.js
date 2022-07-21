//! A pure function is a function where the return value is determined by only two input values, no observable side effects

let addValue = 0

//? pure function
function sum(a, b) {
  addValue++ //observable side effects
  return a + b
}

console.log(sum(10, 2))
console.log(sum(10, 2))
console.log(sum(10, 2))
console.log(addValue)