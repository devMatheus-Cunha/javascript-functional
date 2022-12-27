function composition(...fns) {
 return function (value) {
  return fns.reduce((acc, fn) => {
   return fn(acc)
  }, value)
 }
}

function shout(text) {
 return text.toUpperCase()
}

function emphasize(text) {
 return `${text}!!!!`
}

function slowDown(text) {
 return text.split('').join(' ')
}

const exaggerated = composition(
 shout, emphasize, slowDown
)

const littleExaggerated = composition(
 shout, emphasize
)

const resultOne = exaggerated('stop')
const resultTwo = littleExaggerated('watch out for the hole')
console.log({
 resultOne,
 resultTwo
})