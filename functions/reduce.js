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

const getTotal = item => item.qtd * item.price
const sumValues = (acc, el) => acc + el

const totalValues = cart.map(getTotal).reduce(sumValues, 0)

console.log(totalValues)

// Reduce manual 
Array.prototype.myReduce = function (fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
      if (!acc && i === 0) {
        acc = this[i]
        continue
      }
      acc = fn(acc, this[i], i, this)
    }
    return acc
  }

const totalValuesTwo = cart.map(getTotal).myReduce(sumValues, 0)
console.log(totalValuesTwo)