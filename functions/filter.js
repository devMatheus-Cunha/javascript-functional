const cart = [{
    name: 'Caneta',
    qtd: 10,
    price: 7.99
  },
  {
    name: 'Impressora',
    qtd: 0,
    price: 649.50
  },
  {
    name: 'Caderno',
    qtd: 4,
    price: 27.10
  },
  {
    name: 'Lapis',
    qtd: 3,
    price: 5.82
  },
  {
    name: 'Tesoura',
    qtd: 1,
    price: 19.20
  },
]

const qtaGraterZero = item => item.qtd > 0
// const productWithQtaGrateZero = cart.filter(qtaGraterZero).map(item => item.name)
const productWithQtaGrateZero = cart.flatMap(item => item.qtd > 0 ? item.name : [] )

console.log(productWithQtaGrateZero)
console.log(cart.filter(qtaGraterZero))