const nums = [3, 2, 7, 9, 4, 6]

//! 1) mutable data
let total = 0
for (let index = 0; index < nums.length; index++) {
 total += nums[index]
}
console.log(total)

//! 2) Using Reduce
const totalWithReduce = nums.reduce((a, b) => a += b)
console.log(totalWithReduce)

//! 3) Using Recursion
function sumArr(array, total = 0) {
 if (array.length === 0) return total

 return sumArr(array.slice(1), total + array[0])
}

const result = sumArr(nums)
console.log(result)