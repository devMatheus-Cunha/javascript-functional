// 1) Exemple one
const nums = [1, 2, 3, 4, 5]
const double = (n, i, a) => n * 2 + i + a[i]
console.log(nums.map(double));

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const firstWord = texto => texto[0]
const words = names.map(firstWord)
console.log(names, words)

// 2) Exemple one
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

const getNamesCart = item => item.name

const calcQtdXPrice = () => {
  return cart.map(item => item.qtd * item.price)
}
console.log(cart.map(getNamesCart))
console.log(calcQtdXPrice())

// 3) Manual Map 
Array.prototype.myMap = function(fn) {
  const mapped = []
  for(let i = 0; i < this.length; i ++) {
      const result = fn(this [i], i, this)
      mapped.push(result)
  }
  return mapped
}

const getPrice = item => item.price
console.log(cart.myMap(getPrice))

