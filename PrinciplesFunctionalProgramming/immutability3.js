const person = {
 name: 'John',
 high: 1.76,
 age: 22,
}

//! 1) assignment by reference 
// const newPerson = person
// newPerson.name = "Matheus"
// newPerson.age = 23
// console.log(newPerson)

//! 2) assignment by reference 
const changePerson = (newPerson) => {
 newPerson.name = "Matheus"
 newPerson.age = 23
}
changePerson(person)

console.log(person)