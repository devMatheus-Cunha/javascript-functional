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
function gerarNumerosEntre (min, max) {
  if (min > max) {
       [max, min] = [min, max] 
 }
  return new Promise(resolve => {
       const fator = max - min + 1
       const aleatorio = parseInt (Math.random () * fator) + min
       resolve(aleatorio)
 })
}
gerarNumerosEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => console.log(`O numero gerado foi ${numX10}`)) 