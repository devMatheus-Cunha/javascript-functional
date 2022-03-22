const cart = [{
    name: 'Caneta',
    qtd: 10,
    price: 7.99,
    fragile: true
  },
  {
    name: 'Impressora',
    qtd: 1,
    price: 649.50,
    fragile: true
  },
  {
    name: 'Caderno',
    qtd: 4,
    price: 27.10,
    fragile: false
  },
  {
    name: 'Lapis',
    qtd: 3,
    price: 5.82,
    fragile: false
  },
  {
    name: 'Tesoura',
    qtd: 1,
    price: 19.20,
    fragile: true
  },
]

const isFragile = cart.filter(item => item.fragile === true)
const getTotalPrice = isFragile.map(item => item.qtd * item.price)
const mediaTotal = getTotalPrice.reduce((acc, el) => {
const newQta =  acc.qtd + 1
const newTotal =  acc.total + el
  return {
    qtd: newQta,
    total: newTotal,
    media: newTotal / newQta
  }
}, {
  qtd: 0,
  total: 0,
  media: 0
})

console.log(isFragile)
console.log(getTotalPrice);
console.log(mediaTotal);