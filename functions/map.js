const nums = [1, 2, 3, 4, 5]
const double = (n, i, a) => n * 2 + i + a[i]
console.log(nums.map(double));

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const firstWord = texto => texto[0]
const words = names.map(firstWord)
console.log(names, words)