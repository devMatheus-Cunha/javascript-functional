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

const applyVerification = (fn) => {
 return function (value) {
  // Lazy Evolution
  try {
   fn(value)
  } catch (error) {
   return {
    error
   }
  }
 }
}

const forceSize = withSizeBetween(4)(255)
const forceProductNameValid = forceSize("Product name is invalid")

const validateProductNameValid = applyVerification(forceProductNameValid)

const p1 = {
 name: "A",
 price: 14.99,
 desc: 0.25
}
const p2 = {
 name: "AB",
 price: 14.99,
 desc: 0.25
}

console.log(validateProductNameValid(p1.name))
console.log(validateProductNameValid(p2.name))