// functors are objects that implement the MAP function which is also a wrapper for a value 

// Array is an example of FUNCTORS
const nums = [1, 2, 3, 4, 5, 6]
const newNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, newNums)

function TypeSecutiry(value) {
 return {
  value,
  invalidValue() {
   return this.value === null || this.value === undefined
  },
  map(fn) {
   if (this.invalidValue()) {
    return TypeSecutiry(null)
   } else {
    const newValue = fn(this.value)
    return TypeSecutiry(newValue)
   }
  }
 }
}

const result = TypeSecutiry('This is a text')
 .map(t => t.toUpperCase())
 .map(t => t.split('').join(' '))

console.log(result.value)