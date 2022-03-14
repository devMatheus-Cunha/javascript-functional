//* Callback is a function that receives another funciton
// * This is when a function calls back another function to execute
// 1) concept of the Callback
const sumInTheTerminal = (one, two) => console.log(one + two)
const subInTheTerminal = (one, two) => console.log(one - two)

const exec = (fn, one, two) => fn(one, two)
exec(sumInTheTerminal, 56, 38)
exec(subInTheTerminal, 182, 27)

// 2) concept of the Callback
const cb = () => console.log("Exec1...")
setInterval(cb, 1000);
setTimeout(() => console.log("Exec2..."), 4000);

// ---------------------------------