// Functions declaration
function goodMorning() {
  console.log("goood morning");
}

// Functions expression
const goodEvening = () => {
  console.log("good evening");
}

//? 1) pass a function with param for other function 
function exec(fn) {
  if (typeof fn === "function") {
    fn()
  } else {
    console.log("Your param isn't function")
  }
}
exec(goodMorning)
exec("function")

//? 2) returning a function from another function
function pow(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}
// const bits8 = pow(2)(8)
// or
const powOfTwo = pow(2)
console.log(powOfTwo(8))

//? Task 
const sum = (one) => {
  return (two) => {
    return (three) => {
      return one + two + three
    }
  }
}
function mult(one, two) {
  return one * two
}
function div(one, two) {
  return one / two
}
function sub(one, two) {
  return one - two
}
function calc(one) {
  return (two) => {
    return (fn) => {
      return fn(one, two)
    }
  }
}
console.log(sum(3)(4)(5))
console.log(calc(10)(2)(mult))
console.log(calc(10)(2)(div))
console.log(calc(10)(2)(sub))