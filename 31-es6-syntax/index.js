// Spread operator
// Denoted by ...

const array = [1,2,3,4,5]
const b = array.slice() // copies the array!

const c = [...array] // copies the array!
const d = [...array, 8,9] // copies the array!
const e = [9,9, ...array]
const f = [...array,8, ...array]


// array...

const obj = {beef: "steak", name: "Beefy", car: {model: "Prius", occupants: 4}}
const objZ = {...obj}
const obj2 = {occupation: "Rodeo Clown", name: "Clowny"}
const objB = {...obj, occupation: "Rodeo Clown"}
const objC = {...obj, name: "letty", beef: "nope", occupation: "Rodeo Clown"} // add and modify keys 
const objD = {name: "Letty", ...obj}
const objE = {...obj, ...obj2}

const objA = {...obj}
const oldWay = Object.assign({}, obj)


// Destructuring
// old way
// const name = obj.name
// const car = obj.car

// new way
const { name, car: { model, occupants } } = obj 

console.log(`
  <div>
    <h1>Hi my name is ${name} and I drive a ${model} which seats ${occupants}</h1>
  </div>
`)


// Restrucurting
const lettuce = "delicious..."
const potato = "friend"
const pumpkin = "halloween"


const oldieWay = { lettuce: lettuce, potato: potato, pumpkin: pumpkin}
const restuctured = { lettuce, potato, pumpkin}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = event.target.name.value
  const age = event.target.age.value
  const occupation = event.target.occupation.value

  const body = {
    name,
    age,
    occupation
  }

  // fetching...
})

// const obj = {beef: "steak", name: "Beefy", car: {model: "Prius", occupants: 4}}

function doAThing({ name, car }, { age }){
  console.log(`
    <div>
      <h1>Hi my name is ${name} and I drive a ${car.model} which seats ${car.occupants}</h1>
    </div>
  `)
}

doAThing(obj, {age: 32})

const id = 2
const arry = [{id: 1, name: "Beef"}, {id: 2, name: "Letty"}, {id: 3, name: "Neeraj"}]


// arry[1].name = "Lett Ous" 
// this is great but only works when you know the index of the thing you want to modify

// let's say that we know the id of the thing (anything unique to the object that you want to modify)
const found = arry.find(obj => obj.id === id)
found.name = "Lett Ous"

const copy = {...found}
copy.name = "Lett Ous"

// the map trick
const copiedArray = arry.map(obj => {
  if (obj.id === id){
    return {...obj, name: "Lett Ous"}
  } else {
    return obj
  }
})



// statements vs expressions

// statements are used for control flow
// if true do x if not do y (if statements)
// in the case of x do p, in the case of y do z, in the case of u do r (switch statements)
// const x = if (true){ 23 } else { 45 } NOT USED TO BE EVALUATED
let x;

if (true){
  x = 23
} else {
  x = 45
}

// expression is used to perform an operation and return a value
let y = false ? 23 : 45





