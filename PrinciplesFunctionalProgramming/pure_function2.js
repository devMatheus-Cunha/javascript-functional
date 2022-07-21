//! A pure function is a function where the return value is determined by only two input values, no observable side effects

//? low impurity level 
function randomNumber(min, max) {
  const factor = max - min + 1
  return parseInt(Math.random() * factor) + min
}

console.log(randomNumber(1, 10))
console.log(randomNumber(1, 10))
console.log(randomNumber(1, 10))