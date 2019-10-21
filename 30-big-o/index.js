// write a function that finds a number in an array of numbers


// function find(arr, target){
//   for(let i=0; i < arr.length; i++){
//     console.log("RUNNING", arr[i])
//     if(arr[i] === target){
//       return true
//     }
//   }

//   return false
// }


// console.log(find([3,2,1,4,5,6], 3)) // best-case scenario
// console.log(find([6,2,1,4,5,3], 3)) // worst-case scenario

// // if array has 6 things, might run 6 times
// // if array has 1000 things, might run 1000 times

// // this is mathematically a linear relationship
// // O(n)


// [10,30,30,20].indexOf(20)

const arr = [1,2,3,4,5,6]

function linear(arr){
  for(let i=0; i < arr.length; i++){
    console.log("RUNNING")
  }
}

// linear(arr)

function quadratic(arr){
  for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr.length; j++){
      console.log("RUNNING")
    }
  }
}

// quadratic(arr)

// O(n^2)

function cubic(arr){
  for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr.length; j++){
      for(let k=0; k < arr.length; k++){
        console.log("RUNNING")
      }
    }
  }
}

// cubic(arr)

// O(n^3)


