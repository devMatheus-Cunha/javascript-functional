//! A pure function is a function where the return value is determined by only two input values, no observable side effects

//? inpure
const PI = 3.14

function areaCirc(raio) {
  return raio * raio * PI
}
console.log(areaCirc(10))

//? low impurity level 
function areaCirc(raio) {
  return raio * raio * Math.PI
}
console.log(areaCirc(10))

//? pure function
function areaCircPure(raio, PI) {
  return raio * raio * PI
}
console.log(areaCircPure(10))