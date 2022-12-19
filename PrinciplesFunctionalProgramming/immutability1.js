function funcOrderNotPure(array) {
 return array.sort()
}

function funcOrderPure(array) {
 return [...array].sort()
}

const nums = [3, 2, 7, 9, 4, 6]
const numsWithFreeze = Object.freeze([3, 2, 7, 9, 4, 6]) //! freezer does not allow you to change array values

const ordernation = funcOrderPure(nums)
// funcOrderNotPure(nums) // !will change the values of the array

//? Returns
console.log(ordernation)
console.log(nums)