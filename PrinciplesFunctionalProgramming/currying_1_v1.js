// exemple 1
function sum(a) {
 return (b) => {
  return (c) => {
   return a + b + c;
  }
 }
}
console.log(sum(1)(2)(3))

// exemple 2
function withSizeBetween(min, max, error, text) {
 const size = (text || "").trim().length

 if (size < min || size > max) {
  throw error
 }
}

const p1 = {
 name: "A",
 price: 14.99,
 desc: 0.25
}

withSizeBetween(2, 255, "Name Invalid", p1.name)