//? Functions that operate on other functions, taking them as arguments or returning them, are called higher-order functions.

function exec(fn, ...params) {
  return (value) => {
    return `${value} ${fn(...params)}`;
  }
}

function sum(a, b, c) {
  return a + b + c;
}

function mult(a, b) {
  return a * b
}

const resulOne = exec(sum, 1, 2, 3)("The result is:")
const resulTwo = exec(mult, 10, 2)("The result is:")

console.log(resulOne, resulTwo)