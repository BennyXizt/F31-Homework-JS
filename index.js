

// 1

let admin, name

name = "John"
admin = name
alert(admin)

// 2

const currPlanet = "Earth"
const currUser = "Vitalii"

console.info(currPlanet, currUser)

// 3 

const name = prompt("Enter your name: ", null)
const sName = prompt("Enter your Surname: ", null)
const age = prompt("Enter your age: ", null)

console.warn(name)
console.warn(sName)
console.warn(age)

// 4

const dateOfBirth = prompt("Enter your date of birthday: ", null)
const name = prompt("Enter your name: ", null)

new Date().getFullYear() - dateOfBirth > 18 ? console.log(`${name} sucessfully can walk on the street`) : console.log(`I'm sorry ${name}, but the walk for you is forbidden!`);

// 5

const number = prompt("Enter your number: ", null)
number >= 10 && number <= 1100 ? console.log("Yes") : console.log("No")