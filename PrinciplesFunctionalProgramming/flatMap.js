const lattersOne = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "d", "!"]
const lattersTwo = [
 ["h", ["e"], "l", "l", "o"],
 [" "],
 ["w", ["o", "r"], "d"],
 ["!"]
]

const resultOne = lattersOne.map(l => l.toUpperCase()).reduce((acc, lat) => acc + lat)
const resultTwo = lattersTwo.flat(Infinity)
const resulThree = lattersOne.flatMap(l => [l, "-"]).reduce((acc, lat) => acc + lat)

console.log({
 resultOne,
 resultTwo,
 resulThree
});