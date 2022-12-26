function withSizeBetween(min) {
 return function (max) {
  return function (error) {
   return function (text) {
    // Lazy Evolution
    const size = (text || "").trim().length
    if (size < min || size > max) {
     throw error
    }
   }
  }
 }
}

const forceSize = withSizeBetween(4)(255)
const forceProductNameValid = forceSize("Product name is invalid")

const p1 = {
 name: "A",
 price: 14.99,
 desc: 0.25
}

forceProductNameValid(p1.name)