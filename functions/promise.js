// 1)
let newPromiseOne = new Promise((resolve) => {
  resolve(3)
})
newPromiseOne.then((value) => console.log(value))

let newPromiseTwo = new Promise((resolve) => {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
newPromiseTwo.then(value => value[0])
  .then(first => first[0])
  .then(letter => letter.toLowerCase())
  .then(lowerCase => console.log(lowerCase))


// 2)
function awaitPromise(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...')
      resolve()
    }, time)
  })
}
awaitPromise().then(() => awaitPromise(3000)).then(awaitPromise)

// 3)
function generateNumbersBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max]
  }
  return new Promise(resolve => {
    const factor = max - min + 1
    const random = parseInt(Math.random() * factor) + min
    resolve(random)
  })
}
generateNumbersBetween(1, 60)
  .then(num => num * 10)
  .then(numX10 => console.log(`O numero gerado foi ${numX10}`))

// 4)
function generateNumbers(min, max, tempo) {
  if (min > max)[max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(function () {
      const factor = max - min + 1
      const random = parseInt(Math.random() * factor) + min
      resolve(random)
    }, tempo)
  })
}

const generateMultipleNumbers = () => {
  return Promise.all([
    generateNumbers(1, 60, 4000),
    generateNumbers(1, 60, 1000),
    generateNumbers(1, 60, 500),
    generateNumbers(1, 60, 3000),
    generateNumbers(1, 60, 100),
    generateNumbers(1, 60, 1500),
  ])
}
generateMultipleNumbers().then(numbers => console.log(numbers))
