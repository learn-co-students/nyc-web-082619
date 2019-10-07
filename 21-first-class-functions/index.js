// function sayHello(){
//   console.log("Hello")
// }

// function sayGoodbye(){
//   console.log("NEVER")
// }

// function somethingCompletelyDifferent(){
//   console.log("Monty Python")
// }

// // const obj = {
// //   name: "Ferdinand",
// //   hello: function (){
// //     console.log("Hello")
// //     let beef = "steak"
// //   },
// //   goodbye: sayGoodbye
// // }


// // sayHello()


// function outsideFunction(callback){
//   callback()
// }


function calculateFinalPrice(taxCalculator, amount){
  const taxes = taxCalculator(amount)

  return amount + taxes
}

// function nyStateSalesTax(value){
//   return 0.0824 * value
// }

// function njStateSalesTax(value){
//   return 0.0625 * value
// }

// function nyIncomeTax(value){
//   // 300 lines of tax calculations
//   return finalValue
// }

// function multiplyBy2(num){
//   return num*2
// }

// function multiplyBy3(num){
//   return num*3
// }

function reduceFunction(agg, num){
  return agg + num
}


function createMultplier(multiplier){
  return function(num){
    return num*multiplier
  }
}

const multiplyBy2 = createMultplier(2)
const multiplyBy3 = createMultplier(3)
const multiplyBy1000 = createMultplier(1000)
const multiplyBy200 = createMultplier(200)





const arr1 = [1,2,3,4,5]


const arr2 = arr1.map(multiplyBy2)
const arr3 = arr1.map(multiplyBy3)





