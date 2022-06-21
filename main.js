// Your code here.

/*
getFirstName()

parameters: 1 - object {
  firstName: string,
  lastName: string
}

return firstName
*/

function getFirstName(person){
  return person.firstName
}
console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'})) // -> 'Colin'
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'})) // -> 'Petra'


function getLastName(person){
  return person.lastName
}
console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'})) 
console.log(getLastName({firstName: 'Petra', lastName: 'Solano'})) 

function getFullName(person){
  let object = person.firstName + " " + person.lastName
  //return `${person.firstname} ${person.lastname}`
  return object
}
console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'})) 
console.log(getFullName({firstName: 'Petra', lastName: 'Solano'})) 

/*
parameters: 2
1st parameter, person = {
  firstName: string,
  lastName: string
}
newFirstName: string

change firstName of person object to newFirstName

*/

function setFirstName(person, newFirstName){
  person['firstName'] = newFirstName;
  //person.firstName = newFirstName;
}

setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Jaffe'}
setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Solano'}

function setAge(person, newAge){
  person['age'] = newAge;
  
}


/*
parameter person object{
    firstName: string,
    lastname: string,
    age *: should be a number, but that property may not exist and if it doesn't it, add it then set the age to 1
}


*/

function giveBirthday(person){
  
  //if you are checking to see if an object includes a certain property or not, check if that property is equal to undefined
  if (person.age === undefined){
    person.age = 1
  }
  else {
    person.age = person.age + 1;
  }
}

function marry(person1, person2){
  person1.married = true
  person2.married = true
  person1.spouseName = `${person2.firstName} ${person2.lastName}`
  person2.spouseName = `${person1.firstName} ${person1.lastName}`
}

function divorce(person1, person2){
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
