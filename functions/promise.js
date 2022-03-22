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

function awaitPromise(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...')
      resolve()
    }, time)
  })
}
awaitPromise().then(() => awaitPromise(3000)).then(awaitPromise)