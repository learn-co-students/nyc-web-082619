const whatIsThis = function(){
  console.log("THIS IS OUTSIDE : ", this)

  // function sup(){
  //   console.log("THIS IS INSIDE: ", this)
  // }

  // sup()
}

const whatIsThisArrow = () => {
    console.log("THIS IS: ", this)
  }




function sayGreeting(greeting, excited){
  return `${this.firstName} says: ${greeting}${excited ? "!" : "..."}`
}

function fullName(){
  return `${this.firstName} ${this.lastName}`
}

// sayGreeting // function
// beefy.say // method

// beefy.say === sayGreeting // true

// const beefy = {
//   firstName: "Beefy", 
//   lastName: "McSteaker", 
//   age: 32
// }

// const letty = {
//   firstName: "Letty", 
//   lastName: "McCabby", 
//   age: 2
// }

// PREHISTORTIC OOJS
// function createPerson(firstName, lastName, age){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     fullName: fullName,
//     sayGreeting: sayGreeting
//   }
// }

// const beefy = createPerson("Beefy", "McSteaker", 32)
// const letty = createPerson("Letty", "McCabby", 2)


// BRONZE AGE OOJS
// constructor function
// function Person(firstName, lastName, age){
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.fullName = fullName
//   this.sayGreeting = sayGreeting
// }

// const beefy = new Person("Beefy", "McSteaker", 32)
// const letty = new Person("Letty", "McCabby", 2)

// HIGH GOTHIC AGE OOJS
class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.fullName = fullName
    this.sayGreeting = sayGreeting
  }
}

const beefy = new Person("Beefy", "McSteaker", 32)
const letty = new Person("Letty", "McCabby", 2)


// whatIsThis()